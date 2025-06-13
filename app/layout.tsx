import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'A modern analytics dashboard for tracking business metrics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
              <div className="mr-4 flex">
                <Link className="mr-6 flex items-center space-x-2 font-bold" href="/">
                  Analytics
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link
                    href="/dashboard"
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/docs"
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Documentation
                  </Link>
                </nav>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with Next.js and Tailwind CSS. Analytics Dashboard {new Date().getFullYear()}.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
