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
    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="card-content">
      <div className="welcome-card-text-content">
        <p className="welcome-1">Hey, I'm Raksha 👋</p>
        <p className={`${broadsheetLdoFont.variable} welcome-2`}>
          Welcome to My UI & UX Design Portfolio
        </p>
      </div>
      <div>
        <Image
          src="/images/raksha.png"
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3qnIImwUBUIdIH8nYCtycbzK3vwaFnKKIOQQaa7R&s"
          width={473}
          height={560}
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