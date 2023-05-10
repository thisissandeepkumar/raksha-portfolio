import Image from "next/image";
import "./home.css"
import "./globals.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <WelcomeCard />
      <NumericalValuesCard />
      <MyProjects />
      <ProjectsGridView />
      <Link href="#">
        <button className="dark-button scroll-up-button">SCROLL UP ↗</button>
      </Link>
      <AboutMe />
    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="card-content">
      <div className="welcome-card-text-content">
        <p className="welcome-1">Hey, I'm Raksha 👋</p>
        <p className={`welcome-2`}>
          Welcome to My UI & UX Design Portfolio
        </p>
      </div>
      <div className="card-image-content">
        <Image
          src="/images/raksha.png"
          alt="Image of Raksha"
          fill
        />
      </div>
    </div>
  );
}

function NumericalValuesCard() {
  return (
    <div className="numeric-container">
      <InfoTile value="2+" description="YEARS OF EXPERIENCE" color="#D1F3E1" />
      <InfoTile value="15+" description="DESIGN PROJECTS" color="#FBE5D7" />
      <InfoTile value="10+" description="TOOLS USED" color="#E5E2F6" />
    </div>
  );
}

function InfoTile({value, description, color}: {value: string, description: string, color: string}) {
  return (
    <div className="numeric-tile">
      <p className="numeric-container-value">{value}</p>
      <p style={{ color }} className="numeric-container-description">
        {description}
      </p>
    </div>
  );
}

function MyProjects() {
  return (
    <div id="my-projects">
      <h3 className="section-head">
        <ColouredText text="My" backgroundColor="#D1F3E1" /> Projects
      </h3>
    </div>
  );
}

function ColouredText({text, backgroundColor} : {text: string, backgroundColor: string}) {
  return (
    <span
      style={{
        backgroundColor,
        padding: "15px",
      }}
    >
      {text}
    </span>
  );
}

function ProjectsGridView() {
  return (
    <div className="projects-grid">
      <GridTile src="/images/targo.png" alt="Targo UI" />
      <GridTile src="/images/avighna.png" alt="Avighna UI" />
      <GridTile src="/images/wheresmy.png" alt="Where's My UI" />
      <GridTile src="/images/seacutt.png" alt="SeaCutt UI" />
      <GridTile src="/images/duepal.png" alt="DuePal UI" />
      <GridTile src="/images/artpassion.png" alt="ArtPassion UI" />
      <GridTile src="/images/upaz.png" alt="Upaz UI" />
      <GridTile src="/images/aadhaar.png" alt="Aadhaar UI" />
      <GridTile src="/images/tngo.png" alt="Trust N Go UI" />
      <GridTile src="/images/edutech.png" alt="Edutech UI" />
      <GridTile src="/images/trustensure.png" alt="Trust Ensure UI" />
      <GridTile src="/images/anonymou.png" alt="Anonymous UI" />
      <GridTile src="/images/crypto.png" alt="Crypto UI" />
      <GridTile src="/images/ieesct.png" alt="IEEE SCT UI" />
      <GridTile src="/images/edulog.png" alt="Edulog UI" />
      <GridTile src="/images/diary.png" alt="Diary UI" />
    </div>
  );
}

function GridTile({src, alt} : {src: string, alt: string}) {
  return (
    <div className="projects-grid-tile">
      <Image src={src} alt={alt} fill />
    </div>
  )
}

function AboutMe() {
  return (
    <div id="about-me" className="about-me-container">
      <h3 className="section-head">
        About {<ColouredText text="Me" backgroundColor="#E5E2F6" />}
      </h3>
      <hr className="solid-divider" />
      <div className="about-me-content">
        <div className="about-me-pic">
          <Image src="/images/raksha-small.png" alt="Raksha" fill />
        </div>
        <div className="about-me-description">
          <p>
            I'm a 22 y/o CSE Graduate with strong passion for UI & UX Designing.
            I’ve been designing for 2+ Years and currently work as a
            Professional UX designer.
          </p>
          <p>
            I believe that user experience design is a wonderful blend of
            innovation and human psychology, and through my work, I have come to
            understand the power of digital products paired with compassion and
            empathy towards users. So far I have designed for domains like
            Web3.0, Fintech, Agriculture, LMS, Logistics, AI-based Systems and
            CRMs.
          </p>
          <p>
            When I'm not designing, you can find me sketching zen art and
            painting. I'm also a huge fan of dogs, documentaries, and design -
            not necessarily in that order!
          </p>
        </div>
      </div>
    </div>
  );
}