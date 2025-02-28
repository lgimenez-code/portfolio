import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
require('dotenv').config

export const metadata = {
  title: 'Lucas Gimenez',
  description: 'Portfolio from Lucas Gimenez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
