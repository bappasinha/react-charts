import _Document, { Head, Main, NextScript } from 'next/document'

import { Classes, Colors } from '@blueprintjs/core'

export default class Document extends _Document {
  render() {
    return (
      <html>
        <Head />
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
