import { useEffect, useState, useCallback } from "react";
import type { FormatOptions } from "sql-formatter";
import { format } from "sql-formatter";
import { useFormatterOptions } from "~/routes/lang";

type SqlFormatOptions = Partial<FormatOptions>;

export default function useSqlFormatter(options: SqlFormatOptions) {
  const [mounted, setMounted] = useState(false);
  const { setFormatter } = useFormatterOptions();
  const formatter = useCallback(
    (code: string) => format(code, options),
    [options]
  );
  useEffect(() => {
    setFormatter(formatter);
    setMounted(true);
  }, [setFormatter, formatter, options]);

  return mounted;
}
