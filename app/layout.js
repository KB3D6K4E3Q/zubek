import { Html, Head, Main, NextScript } from 'next/document';
import 'core-js';
import 'regenerator-runtime/runtime';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload globals.css to prevent render-blocking */}
        <link
          rel="preload"
          href="/globals.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="/globals.css" />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
