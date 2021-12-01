import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts";
import { ColorModeScript } from "@chakra-ui/react";
import { useEffect } from "react";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/ico" src="favicon.ico" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
