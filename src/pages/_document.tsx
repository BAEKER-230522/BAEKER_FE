import Document, { Html, Main, NextScript, DocumentContext, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";

const themeInitializerScript = `
      (function () {
        document.body.dataset.theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
      })();
  `;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="title" content="BAEKER" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="백준 알고리즘 문제를 함께 스터디 형식으로 풀며,도전과 성장의 즐거움을 누릴 수 있습니다."
          />
          <meta property="og:image" content="https://d28btnt2z9x7nc.cloudfront.net/static/logo/logo_2.png" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
