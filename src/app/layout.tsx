import Link from "next/link";
import "./globals.css"
import "./layout.css"

export const metadata = {
  title: 'Raksha S',
  description: 'Your next UI/UX Developer!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="main-nav">
          <ul className="nav-ul">
            <Link
              className="nav-li"
              href="https://github.com/thisissandeepkumar/raksha-portfolio"
            >
              MY PROJECTS
            </Link>
            <Link
              className="nav-li"
              href="https://github.com/thisissandeepkumar/raksha-portfolio"
            >
              ABOUT ME
            </Link>
            <Link
              className="nav-li"
              href="https://github.com/thisissandeepkumar/raksha-portfolio"
            >
              MY BLOGS
            </Link>
            <Link
              className="nav-li"
              href="https://github.com/thisissandeepkumar/raksha-portfolio"
            >
              CONTACT ME
            </Link>
            <Link
              className="nav-li"
              href="https://github.com/thisissandeepkumar/raksha-portfolio"
            >
              SUPPORT
            </Link>
          </ul>
          <button className="dark-button">RESUME ↗</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
