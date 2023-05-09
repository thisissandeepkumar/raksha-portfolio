import Image from "next/image";
import "./home.css"

export default function Home() {
  return (
    <div>
      <WelcomeCard />
    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <div className="card-content">
        <div className="welcome-card-text-content">
          <p className="welcome-1">Hey, I'm Raksha 👋</p>
          <p className="welcome-2">Welcome to My UI & UX Design Portfolio</p>
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
    </div>
  );
}