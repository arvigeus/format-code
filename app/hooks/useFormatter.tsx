import { useState } from "react";
import prettier from "prettier/standalone";
import { Options } from "prettier";

const useFormatter = (name: string, options: Options) => {
  const [code, setCode] = useState("");
  const onEditorChange = (code: string) => setCode(code);
  const handleFormat = () => {
    try {
      setCode(prettier.format(code, options));
    } catch (e) {
      alert("Unable to format");
    }
  };
  return { code, handleFormat, onEditorChange };
};

export default useFormatter;
