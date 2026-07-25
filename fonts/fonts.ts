import localFont from 'next/font/local'

export const serifItalic = localFont({
  src: "../public/fonts/instrumentserif-italic.ttf",
  variable: '--font-serif-italic',
  display: 'swap'
})

export const serif = localFont({
  src: "../public/fonts/instrumentserif-regular.ttf",
  variable: '--font-serif',
  display: 'swap'
})

export const logo = localFont({
  src: "../public/fonts/monteya.otf",
  variable: '--font-logo',
  display: 'swap'
})
