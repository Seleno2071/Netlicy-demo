import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ContextCompo from '@/context/ContextCompo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tastopio',
  description: 'Enjoy the tasty meal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
       <ContextCompo>
        <Navbar/>
        {children}
        </ContextCompo>
        </body>
    </html>
  )
}
