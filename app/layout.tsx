import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Architects_Daughter } from 'next/font/google'
import './styles/globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
})

const robotoMonoItalic = Roboto_Mono({
  subsets: ['latin'],
  weight: '300',
  style: 'italic',
  variable: '--font-roboto_mono_light_italic',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-architects_daughter',
})

export const metadata: Metadata = {
  title: 'Ewerton Reis',
  description: 'Portfolio of a full stack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${robotoMonoItalic.variable} ${roboto.variable}
        ${architectsDaughter.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
