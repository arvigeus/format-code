// https://reactrouter.com/docs/en/v6/api#outlet
// https://github.com/uiwjs/react-codemirror/blob/master/website/App.tsx
import { useState, useCallback, useRef } from "react";
import type { LinksFunction } from "remix";
import { Outlet, useOutletContext, useFetcher } from "remix";

import Panel from "~/components/Panel";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "/styles/editor.css",
    },
  ];
};

export type FormatterFunction = (text: string) => string;

export default function Format() {
  const [code, setCode] = useState("");
  const value = useRef<string>("");
  const format = useRef<FormatterFunction>();
  const toggleTheme = useFetcher<Record<string, string>>();

  const setFormatter = useCallback((func: FormatterFunction) => {
    format.current = func;
  }, []);
  const handleChange = useCallback((input: string) => {
    value.current = input;
  }, []);
  const handleFormat = useCallback(() => {
    if (!format.current || !value.current || value.current === code) return;
    value.current = format.current(value.current);
    if (value.current !== code) setCode(value.current);
    else {
      // Edge case: Only formatting was changed (this would not trigger re-render)
      // Use a dummy value to force update code
      setCode(value.current + " ");
      // Then use delay to immidiately correct it
      setTimeout(() => setCode(value.current.slice(0, -1)), 0);
    }
  }, [code]);
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <div style={toggleTheme.data}>
      <Outlet context={{ handleChange: handleChange, setFormatter, code }} />
      <toggleTheme.Form method="post" action="/toggleTheme">
        <Panel
          onFormat={handleFormat}
          onCopyToClipboard={copyToClipboard}
          reloadDocument={!!toggleTheme.data}
          busy={toggleTheme.state === "submitting"}
        />
      </toggleTheme.Form>
    </div>
  );
}

type CodeFormatterType = {
  code: string;
  handleChange: (val: string) => void;
  setFormatter: (handler: FormatterFunction) => void;
};

export function useFormatterOptions() {
  return useOutletContext<CodeFormatterType>();
}
