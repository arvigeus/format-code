import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

const editorViewTheme = EditorView.theme({
  "&": {
    color: "var(--color-foreground)",
    backgroundColor: "var(--color-background)",
  },

  ".cm-content": { caretColor: "var(--color-editor-cursor)" },

  "&.cm-focused .cm-cursor": { borderLeftColor: "var(--color-editor-cursor)" },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, & ::selection":
    { backgroundColor: "var(--color-editor-selection)" },

  "&.cm-editor.cm-focused": { outline: "none" },

  ".cm-panels": {
    backgroundColor: "var(--color-editor-dropdownBackground)",
    color: "var(--color-foreground)",
  },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

  ".cm-searchMatch": {
    backgroundColor: "var(--color-editor-dropdownBackground)",
    outline: `1px solid ${"var(--color-editor-dropdownBorder)"}`,
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "var(--color-editor-selection)",
  },

  ".cm-activeLine": { backgroundColor: "var(--color-editor-activeLine)" },
  ".cm-activeLineGutter": { backgroundColor: "var(--color-background)" },
  ".cm-selectionMatch": { backgroundColor: "var(--color-editor-selection)" },

  ".cm-matchingBracket, .cm-nonmatchingBracket": {
    backgroundColor: "var(--color-editor-matchingBracket)",
    outline: "none",
  },
  ".cm-gutters": {
    backgroundColor: "var(--color-background)",
    color: "var(--color-foreground)",
    border: "none",
  },
  ".cm-lineNumbers, .cm-gutterElement": {
    color: "var(--color-editor-lineNumber)",
  },

  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "var(--color-foreground)",
  },

  ".cm-tooltip": {
    border: `1px solid ${"var(--color-editor-dropdownBorder)"}`,
    backgroundColor: "var(--color-editor-dropdownBackground)",
    color: "var(--color-foreground)",
  },
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      background: "var(--color-editor-selection)",
      color: "var(--color-foreground)",
    },
  },
});

const highlightStyle = HighlightStyle.define([
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
  { tag: t.heading, fontWeight: "bold", color: "var(--color-editor-heading)" },
  {
    tag: [t.atom, t.bool, t.special(t.variableName)],
    color: "var(--color-editor-variable)",
  },
  { tag: t.invalid, color: "var(--color-editor-invalid)" },
  { tag: t.strikethrough, textDecoration: "line-through" },
]);

const editorTheme: Extension = [editorViewTheme, highlightStyle];

export default editorTheme;
