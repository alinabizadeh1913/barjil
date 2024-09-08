import './style/style.css';

import { Montserrat } from 'next/font/google';

const Font = Montserrat({
  subsets : ['latin'],
  weight : ['500']
})

const RootLayout = ({children}) => {
  return (
    <html >
      <head>
        <title>
          Company
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={Font.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;