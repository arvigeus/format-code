import { useEffect, useState, useCallback } from "react";
import type { FormatOptionsWithDialect } from "sql-formatter";
import { formatDialect } from "sql-formatter";
import { useFormatterOptions } from "~/routes/lang";

export default function useSqlFormatter(options: FormatOptionsWithDialect) {
  const [mounted, setMounted] = useState(false);
  const { setFormatter } = useFormatterOptions();
  const formatter = useCallback(
    (code: string) => Promise.resolve(formatDialect(code, options)),
    [options],
  );
  useEffect(() => {
    setFormatter(formatter);
    setMounted(true);
  }, [setFormatter, formatter, options]);

  return mounted;
}
