import "texteditor-lexical/style.css";
import { LexicalEditor } from "texteditor-lexical";
import type { LexicalEditorProps } from "texteditor-lexical";
const InputHTMLEditor = (props: LexicalEditorProps) => {
  return <LexicalEditor {...props} />;
};

export default InputHTMLEditor;
