import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
