import '@radix-ui/themes/styles.css';
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from './NavBar'
// import NavBar from './NavBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Roboto } from "next/font/google"
import Footer from './components/Footer'
const roboto = Roboto({ weight: "400", subsets: ["latin"] })

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Ourfam2',
  description: 'Next Ourfam version 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={roboto.className}>
        <Theme>
          <NavBar />

          <main>{children}</main>
          {/* <ThemePanel /> */}
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
