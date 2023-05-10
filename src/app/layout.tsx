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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
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
              <Link className="nav-li" href="#about-me">
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
        <footer className="main-footer">
          <div className="footer-routes">
            <div className="footer-routes-item">MY PROJECTS</div>
            <div className="footer-routes-item">ABOUT ME</div>
            <div className="footer-routes-item">MY BLOGS</div>
            <div className="footer-routes-item">CONTACT ME</div>
            <div className="footer-routes-item">SUPPORT</div>
          </div>
          <hr className="solid-divider footer-divider" />
          <h2 className="contact-me">Contact Me</h2>
          <div className="contact-section">
            <div className="contact-details">
              <span className="contact-details-title">Phone No. </span>
              <span className="contact-details-description">
                +91 879-249-1252
              </span>
            </div>
            <div className="contact-details">
              <span className="contact-details-title">Email </span>
              <span className="contact-details-description">
                rakshakaranth.s@gmail.com
              </span>
            </div>
          </div>
          <div className="social-handles">
            <SocialBubble icon="/icons/instagram.svg" />
            <SocialBubble icon="/icons/linkedin.svg" />
            <SocialBubble icon="/icons/behance.svg" />
          </div>
        </footer>
      </body>
    </html>
  );
}

function SocialBubble({icon} : {icon: string}) {
  return (
    <div className="social-bubble">
      <Image
        className="social-bubble-icon"
        src={icon}
        alt="Instagram"
        width={40}
        height={40}
      />
    </div>
  );
}
