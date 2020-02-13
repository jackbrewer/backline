import React from 'react'
import App from 'next/app'
import { NextSeo } from 'next-seo'

import '@/asset/scss/base.scss'

import { defaults } from '../meta.config'

import MainLayout from '@/component/Layout/MainLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <MainLayout>
        <NextSeo config={defaults} />
        <Component {...pageProps} />
      </MainLayout>
    )
  }
}

export default MyApp
