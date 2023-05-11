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
      <MySkills />
      <MyHobbiesSection />
      <MyAwards />
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

function MySkills() {
  return (
    <div className="skills-section">
      <h3 className="section-head">My Skills & Tools</h3>
      <MySkillsContentCard />
    </div>
  );
}

function MySkillsContentCard() {
  return (
    <div>
      <div className="skills-section-box">
        <div className="skills-title-container">
          <MySkillsTitle title="Skills" color="#D1F3E1" />
        </div>
        <div className="skills-description-section">
          <MySkillsContentGridItem title="Visual Design" level="Advanced" />
          <MySkillsContentGridItem title="Wire-framing" level="Advanced" />
          <MySkillsContentGridItem
            title="Information Architecture"
            level="Advanced"
          />
          <MySkillsContentGridItem title="Product Strategy" level="Advanced" />
          <MySkillsContentGridItem title="Prototyping" level="Advanced" />
          <MySkillsContentGridItem title="Collaboration" level="Advanced" />
          <MySkillsContentGridItem title="Accessibility Design" level="Basic" />
          <MySkillsContentGridItem title="Usability Testing" level="Basic" />
        </div>
      </div>
    </div>
  );
}

function MySkillsTitle({title, color}: {title: string, color: string}) {
  return (
    <span className="skills-title-underline">
      <h3 className="skills-title">{title}</h3>
    </span>
  );
}

function MySkillsContentGridItem({title, level}: {title: string, level: string}) {
  return (
    <div className="skills-description-tile">
      <h4 className="skills-description-title">{title}</h4>
      <p className="skills-description-level">{level}</p>
    </div>
  );
}

function MyHobbiesSection() {
  return (
    <div className="hobbies-section">
      <h3 className="section-head">My Hobbies</h3>
      <div className="hobbies-container">
        <div className="hobbies-card">
          <div className="hobbies-image">
            <Image src="/images/zen.png" alt="Zen" fill />
          </div>
          <div>
            <h4 className="hobby-title">Zen Art is my therapy</h4>
            <p className="hobby-description">
              I’ve always loved art. It helps me channelise my thoughts and
              keeps my creative juices flowing. I create pencil sketches and zen
              art.
            </p>
          </div>
        </div>
        <div className="hobbies-card">
          <div className="hobbies-image">
            <Image src="/images/zen.png" alt="Zen" fill />
          </div>
          <div>
            <h4 className="hobby-title">Zen Art is my therapy</h4>
            <p className="hobby-description">
              I’ve always loved art. It helps me channelise my thoughts and
              keeps my creative juices flowing. I create pencil sketches and zen
              art.
            </p>
          </div>
        </div>
        <div className="hobbies-card">
          <div className="hobbies-image">
            <Image src="/images/zen.png" alt="Zen" fill />
          </div>
          <div>
            <h4 className="hobby-title">Zen Art is my therapy</h4>
            <p className="hobby-description">
              I’ve always loved art. It helps me channelise my thoughts and
              keeps my creative juices flowing. I create pencil sketches and zen
              art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyAwards() {
  return (
    <div className="awards-section-container">
      <h3 className="section-head">My Awards And Achievements</h3>
      <div className="awards-section-content">
        <AwardsCard
          imageSrc="/images/smartindia-hackathon-2022.png"
          title="2nd Prize | Smart India Hackathon 2022"
          description="Issued by AICTE · Aug 2022"
        />
        <AwardsCard
          imageSrc="/images/aadhaar-hackathon.png"
          title="3rd Prize | Aadhaar Hackathon 2021"
          description="Issued by UIDAI (Unique Identification Authority of India) · Nov 2021"
        />
        <AwardsCard
          imageSrc="/images/ieee-hackathon.png"
          title='2nd Prize | "U, I & X" - UX Designathon'
          description="Issued by IEEE · Oct 2021"
        />
        <AwardsCard
          imageSrc="/images/hackbout.png"
          title="1st Prize | Hackbout 2.0"
          description="Issued by Hack Club NMIT · Jun 2021"
        />
        <AwardsCard
          imageSrc="/images/smart-india-hackathon.png"
          title="1st Prize | Smart India Hackathon 2019"
          description="Issued by Ministry of Civil Aviation · Mar 2019"
        />
      </div>
    </div>
  );
}

function AwardsCard({imageSrc, title, description}: {imageSrc: string, title: string, description: string}) {
  return (
    <div className="awards-card">
      <div className="awards-image">
        <Image
          src={imageSrc}
          alt="Smart India Hackathon 2022 Winners"
          fill
        />
      </div>
      <p className="awards-title">{title}</p>
      <p className="awards-description">{description}</p>
    </div>
  );
}