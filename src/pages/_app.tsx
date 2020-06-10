import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import '../styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { Component: NextPage; pageProps: any }

const RootComponent: NextPage<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Diffy Squares</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default RootComponent
