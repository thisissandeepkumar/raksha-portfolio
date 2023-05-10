import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
    <html lang="en" style={{scrollBehavior: "smooth"}}>
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
          <Image
            className="menu-icon"
            src="/icons/menu_icon.svg"
            alt="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsptVQSRVRivZeLcgXA7rv3z0na_vtcJ-xapXoH-bhVNM78ghI"
            width={30}
            height={30}
          />
          <ul className="nav-ul">
            <li>
              <Link className="nav-li" href="#my-projects">
                MY PROJECTS
              </Link>
            </li>
            <li>
              <Link className="nav-li" href="#">
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link className="nav-li" href="#">
                MY BLOGS
              </Link>
            </li>
            <li>
              <Link className="nav-li" href="#">
                CONTACT ME
              </Link>
            </li>
            <li>
              <Link className="nav-li" href="#">
                SUPPORT
              </Link>
            </li>
          </ul>
          <Link
            href="https://drive.google.com/file/d/1mp_nRpDA44XLWsJkfrlpWJ1eqOSR7xtc/view?usp=sharing"
            target="_blank"
          >
            <button className="dark-button">RESUME ↗</button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
