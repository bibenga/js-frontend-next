import './globals.css'
// import { Inter } from 'next/font/google'
import { Ubuntu_Mono } from 'next/font/google'
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })
const inter = Ubuntu_Mono({ style: 'normal', subsets: ["latin"], weight: '400' })

export const metadata = {
  title: 'Olala App',
  description: 'Olala next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav>
          <span style={{ margin: "30px" }}>Olala layout</span>
          <Link style={{ margin: "30px" }} href="/">Home</Link>
          <Link style={{ margin: "30px" }} href="/dashboard">Dashboard</Link>
          <Link style={{ margin: "30px" }} href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
