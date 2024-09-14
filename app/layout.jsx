'use client';

import useStore from './store/Store';
import './style/style.css';

const RootLayout = ({ children }) => {
  const { language, setLanguage } = useStore();

  return (
    <html dir={language === 'en' ? 'ltr' : 'rtl'}>
      <head>
        <link rel="shortcut icon" href="./img/logo.svg" type="image/x-icon" />
        <title>Barjil Trading</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={language === 'en' ? 'body-lang-en' : 'body-lang-other'}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
