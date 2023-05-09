import Head from "next/head";
import Link from "next/link";
import "./globals.css"
import "./layout.css"

export const metadata = {
  title: 'Raksha S',
  description: 'Your next UI/UX Designer!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <nav className="main-nav">
          <ul className="nav-ul">
            <Link className="nav-li" href="#">
              MY PROJECTS
            </Link>
            <Link className="nav-li" href="#">
              ABOUT ME
            </Link>
            <Link className="nav-li" href="#">
              MY BLOGS
            </Link>
            <Link className="nav-li" href="#">
              CONTACT ME
            </Link>
            <Link className="nav-li" href="#">
              SUPPORT
            </Link>
          </ul>
          <Link href="#">
            <button className="dark-button">RESUME ↗</button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
