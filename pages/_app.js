import '../styles/main.css'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { GoogleOAuthProvider } from '@react-oauth/google'

const progress = new ProgressBar({
  size: 4, color: '#fcba03', className: 'z-100', delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);


  return (
    <GoogleOAuthProvider
      clientId={`543529231903-8hack13g3h33d6dj492i419ot21qqiut.apps.googleusercontent.com`}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster
            toastOptions={{
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: 'black',
              },
              // success: {
              //   style: {
              //     background: '#3ff23f',
              //   },
              // },
              // error: {
              //   style: {
              //     background: '#f85151',
              //   },
              // },
              // loading: {
              //   style: {
              //     background: '#bcbcbc',
              //   },
              // },
            }}
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default MyApp
