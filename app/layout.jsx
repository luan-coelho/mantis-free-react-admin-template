'use client'

import ThemeCustomization from '../themes'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeCustomization>{children}</ThemeCustomization>
      </body>
    </html>
  )
}
