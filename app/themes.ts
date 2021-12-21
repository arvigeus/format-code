export type ThemeVariant = "light" | "dark";

export type Theme = {
  foreground: string;
  background: string;
};

export type EditorTheme = {
  selection: string;
  cursor: string;
  dropdownBackground: string;
  dropdownBorder: string;
  activeLine: string;
  matchingBracket: string;
  keyword: string;
  storage: string;
  variable: string;
  parameter: string;
  function: string;
  string: string;
  constant: string;
  type: string;
  class: string;
  number: string;
  comment: string;
  heading: string;
  invalid: string;
  regexp: string;
  lineNumber: string;
};

export const themeColors: Record<ThemeVariant, Theme> = {
  light: {
    foreground: "#0066b8",
    background: "#e3eaf1",
  },
  dark: {
    foreground: "#fff",
    background: "#2f2f2f",
  },
};

export const editorColors: Record<ThemeVariant, EditorTheme> = {
  light: {
    selection: "#80CBC440",
    cursor: "#272727",
    dropdownBackground: "#FAFAFA",
    dropdownBorder: "#00000010",
    activeLine: "#CCD7DA50",
    matchingBracket: "#FAFAFA",
    keyword: "#39ADB5",
    storage: "#39ADB5",
    variable: "#90A4AE",
    parameter: "#90A4AE",
    function: "#6182B8",
    string: "#91B859",
    constant: "#39ADB5",
    type: "#E2931D",
    class: "#E2931D",
    number: "#F76D47",
    comment: "#90A4AE",
    heading: "#39ADB5",
    invalid: "#E5393570",
    regexp: "#91B859",
    lineNumber: "#999",
  },
  dark: {
    selection: "#80CBC420",
    cursor: "#FFCC00",
    dropdownBackground: "#2f2f2f",
    dropdownBorder: "#FFFFFF10",
    activeLine: "#00000050",
    matchingBracket: "#2f2f2f",
    keyword: "#89DDFF",
    storage: "#89DDFF",
    variable: "#EEFFFF",
    parameter: "#EEFFFF",
    function: "#82AAFF",
    string: "#C3E88D",
    constant: "#89DDFF",
    type: "#FFCB6B",
    class: "#FFCB6B",
    number: "#F78C6C",
    comment: "#546E7A",
    heading: "#89DDFF",
    invalid: "#f0717870",
    regexp: "#C3E88D",
    lineNumber: "#999",
  },
};
