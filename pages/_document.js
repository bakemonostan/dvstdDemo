import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel='preload'
          href='/fonts/BebasNeue_Bold.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/BebasNeue_Regular.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Montserrat-Light.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Montserrat-Medium.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Montserrat-Bold.otf'
          as='font'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

