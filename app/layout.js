import { Html, Head, Main, NextScript } from 'next/document';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="google-site-verification" content="jgPySbe7Eb7Qsqg7uztKDs82BO195bVHlLs4EpI1jZ4" />
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
