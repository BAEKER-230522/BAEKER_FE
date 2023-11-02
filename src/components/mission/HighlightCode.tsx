import React, { useEffect } from "react";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);
import { S } from "./style";
// Import a theme from the package

interface Props {
  content: string;
  status: boolean;
  language: "javascript" | "java" | "python";
}

const HighlightCode = ({ content, status, language }: Props) => {
  const myHtml = hljs.highlight(content, { language }).value;
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <S.CodeHighlighterContainer status={status}>
      <S.CodeHighlight>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: myHtml }} />
        </pre>
      </S.CodeHighlight>
      <S.CodeHighlightBackground />
    </S.CodeHighlighterContainer>
  );
};

export default HighlightCode;
