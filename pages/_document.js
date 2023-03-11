import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/BebasNeue_Bold.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/BebasNeue_Regular.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat-Light.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat-Medium.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat-Bold.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat-Bold.otf'
            as='font'
            crossOrigin='anonymous'
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

