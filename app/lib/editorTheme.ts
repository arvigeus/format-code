import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export default createTheme({
  theme: "dark",
  settings: {
    background: "var(--color-background)",
    backgroundImage: "",
    foreground: "var(--color-foreground)",
    caret: "var(--color-editor-cursor)",
    selection: "var(--color-editor-selection)",
    selectionMatch: "var(--color-editor-selection)",
    lineHighlight: "#8a91991a",
    gutterBackground: "var(--color-background)",
    gutterForeground: "var(--color-foreground)",
  },
  styles: [
    { tag: t.keyword, color: "var(--color-editor-keyword)" },
    {
      tag: [t.name, t.deleted, t.character, t.macroName],
      color: "var(--color-editor-variable)",
    },
    { tag: [t.propertyName], color: "var(--color-editor-function)" },
    {
      tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
      color: "var(--color-editor-string)",
    },
    {
      tag: [t.function(t.variableName), t.labelName],
      color: "var(--color-editor-function)",
    },
    {
      tag: [t.color, t.constant(t.name), t.standard(t.name)],
      color: "var(--color-editor-constant)",
    },
    {
      tag: [t.definition(t.name), t.separator],
      color: "var(--color-editor-variable)",
    },
    { tag: [t.className], color: "var(--color-editor-class)" },
    {
      tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
      color: "var(--color-editor-number)",
    },
    {
      tag: [t.typeName],
      color: "var(--color-editor-type)",
      fontStyle: "var(--color-editor-type)",
    },
    {
      tag: [t.operator, t.operatorKeyword],
      color: "var(--color-editor-keyword)",
    },
    {
      tag: [t.url, t.escape, t.regexp, t.link],
      color: "var(--color-editor-regexp)",
    },
    { tag: [t.meta, t.comment], color: "var(--color-editor-comment)" },
    { tag: t.strong, fontWeight: "bold" },
    { tag: t.emphasis, fontStyle: "italic" },
    { tag: t.link, textDecoration: "underline" },
    {
      tag: t.heading,
      fontWeight: "bold",
      color: "var(--color-editor-heading)",
    },
    {
      tag: [t.atom, t.bool, t.special(t.variableName)],
      color: "var(--color-editor-variable)",
    },
    { tag: t.invalid, color: "var(--color-editor-invalid)" },
    { tag: t.strikethrough, textDecoration: "line-through" },
  ],
});
