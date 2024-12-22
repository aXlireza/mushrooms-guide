import { AppSidebar } from '@/components/app-sidebar'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from '@/components/ui/sidebar'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps): JSX.Element {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <SidebarProvider>
              <AppSidebar /> */}
              <main>
                <Header />
                {children}
              </main>
            {/* </SidebarProvider> */}
          </ThemeProvider>
      </body>
    </html>
  )
}

