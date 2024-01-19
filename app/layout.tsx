import { ThemeProvider } from "@/components/theme-provider"

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adarsh WebDev',
  description: 'Web Developer',
}

import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background m-0 p-0 antialiased "
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
              {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
