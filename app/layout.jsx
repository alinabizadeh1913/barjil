'use client';

import useStore from './store/Store';
import './style/style.css';

import { Montserrat } from 'next/font/google';
import irFont from 'next/font/local';

const iranFont = irFont({
  src : '../public/fonts/IRSans.woff',
})

const Font = Montserrat({
  subsets : ['latin'],
  weight : ['500']
})


const RootLayout = ({children}) => {

  const {language,setLanguage} = useStore();

  return (
    <html dir={`${language == 'en' ? 'ltr' : 'rtl'}`}>
      <head>
        <link rel="shortcut icon" href="./img/logo.svg" type="image/x-icon" />
        <title>
          Barjil Trading
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${language == 'en' ? Font.className : iranFont.className }`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;