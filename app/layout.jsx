import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olive - The Safest Way to Shop for Groceries',
  description: 'Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family\'s Diet and Get Expert-Backed Food Insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
