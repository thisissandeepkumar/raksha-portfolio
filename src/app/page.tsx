import Image from "next/image";
import localFont from "next/font/local"
import "./home.css"

const broadsheetLdoFont = localFont({
  src: "./fonts/Broadsheet_LDO.ttf",
  variable: "--font-broadsheet-ldo"
})

export default function Home() {
  return (
    <div>
      <WelcomeCard />
      <NumericalValuesCard />
      <MyProjects />
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