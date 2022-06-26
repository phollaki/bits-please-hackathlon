import Head from "next/head"
import { Router } from "next/router"
import NProgress from "nprogress"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  Router.events.onRouteChangeStart = url => {
    NProgress.start()
  }

  Router.events.onRouteChangeComplete = () => NProgress.done()

  Router.events.onRouteChangeError = () => NProgress.done()

  return (
    <>
      <Head>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      </Head>
    <Component {...pageProps} />
    </>

  )
}

export default MyApp
