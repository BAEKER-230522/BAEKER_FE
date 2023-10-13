import React, { useEffect } from "react";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);
import { S } from "./style";
// Import a theme from the package

interface Props {
  content: string;
  status: boolean;
  language: "typescript" | "java" | "python";
}

const HighlightCode = ({ content, status, language }: Props) => {
  const myHtml = hljs.highlight(content, { language }).value;
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <S.CodeHighlighterContainer status={status}>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: myHtml }} />
      </pre>
    </S.CodeHighlighterContainer>
  );
};

export default HighlightCode;

[[{}, {}, {}, {}, {}]];
