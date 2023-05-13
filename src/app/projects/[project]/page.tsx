"use client";

import Image from "next/image";
import styles from "./styles.module.css"

const projectData = [
  {
    id: "targo",
    mainTitle: "Targo - Logistics Application",
    labels: [
      "Logistics System",
      "Delivery App",
      "Mobile & Web Interface",
      "Role Based Access",
    ],
    description:
      "TARGO is a logistics application that revolutionizes the way manufacturers, traders, and business owners transport their goods. The platform connects users with a network of reliable truck owners and drivers, allowing for efficient and cost-effective transportation of goods to and from any location in India.",
    duration: "9 Weeks",
    screens: "112",
    role: "UI & UX Designer",
    projectImage: "/images/targo-main.png",
    projectScope:
      "The Project will be implemented for traders, shipment officials and load delivery truck drivers. There is also an admin module to track and monitor all deliveries. This is a logistics system specific to load transportation through trucks.",
    projectGoals: [
      "Easy To Use: Make the application easy to use for all users.",
      "Intuitive: Make the application intuitive for all users.",
      "Efficient: Make the application efficient for all users.",
      "Scalable: Make the application scalable for all users.",
    ],
    visualDesigns: ["targo-1.png", "targo-2.png", "targo-3.png"],
    designApproach: [
      "Research and define the problem",
      "Define the user flow",
      "Create wireframes",
      "Create high fidelity designs",
    ],
    toolsUsed: "Figma, Adobe Illustrator, Balsamiq, Miro, Maze",
    mobileUserInterfaces: [],
    webUserInterfaces: [],
    results:
      "The client was extremely pleased with the final result, which incorporated their unique part-loading system and advanced logistics algorithms into an intuitive and easy-to-use interface. The real-time tracking and monitoring features for both customers and delivery drivers, as well as the admin dashboard for truck monitoring and management, were particularly impressive.",
  },
];


export default function ProjectPage({ params }: { params: { project: string } }) {

  const project: any = projectData.find(
      (tempProject) => tempProject.id === params.project
    )

  return (
    <div>
      <div className={`${styles.alignment} ${styles.responsiveRow}`}>
        <div className={styles.projectOverviewBox}>
          <h3 className={`${styles.mainTitle} ${styles.zmzp}`}>
            {project.mainTitle}
          </h3>
          <div className={`${styles.labelsContainer}`}>
            {project.labels.map((label: string) => (
              <span className={`${styles.labels}`}>{label}</span>
            ))}
          </div>
          <p className={`${styles.textContent}`}>{project.description}</p>
          <div className={styles.projectDetailsContainer}>
            <ProjectDetails
              value={project.duration}
              subheading="Project Duration"
            />
            <ProjectDetails value={project.screens} subheading="UI Screens" />
            <ProjectDetails value={project.role} subheading="My Role" />
          </div>
        </div>
        <div className={styles.projectImage}>
          <Image src={project.projectImage} alt={project.projectImage} fill />
        </div>
      </div>
      <hr className={styles.sectionDivisionLine} />
      <div className={`${styles.alignment}`}>
        <h3 className={`${styles.contentHeading} ${styles.zmzp}`}>
          Project Scope:
        </h3>
        <p className={styles.textContent}>{project.projectScope}</p>
      </div>
      <div className={`${styles.alignment}`}>
        <h3 className={`${styles.contentHeading} ${styles.zmzp}`}>
          Project Goals
        </h3>
        <ul>
          {project.projectGoals.map((goal: string) => (
            <li className={styles.textContent}>{goal}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.alignment}`}>
        <h3 className={styles.contentHeading}>Visual Design</h3>
      </div>
      <div className={`${styles.alignment}`}>
        <h3 className={styles.contentHeading}>Design Approach</h3>
        <ul>
          {project.designApproach.map((approach: string) => (
            <li className={styles.textContent}>{approach}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.alignment}`}>
        <h3 className={styles.contentHeading}>Tools Used:</h3>
        <p className={`${styles.textContent}`}>{project.toolsUsed}</p>
      </div>
      <div className={`${styles.mobileInterface}`}>
        <div className={`${styles.alignment}`}>
          <h3 className={styles.contentHeading}>Mobile User Interfaces</h3>
        </div>
      </div>
      <div className={`${styles.mobileInterface}`}>
        <div className={`${styles.alignment}`}>
          <h3 className={styles.contentHeading}>Web User Interfaces</h3>
        </div>
      </div>
      <div className={`${styles.alignment}`}>
        <h3 className={styles.contentHeading}>Results:</h3>
        <p className={styles.textContent}>{project.results}</p>
      </div>
    </div>
  );
}

function ProjectDetails({ value, subheading }: { value: string, subheading: string }) {
  return (
    <div>
      <p className={`${styles.projectValue} ${styles.zmzp}`}>{value}</p>
      <p className={`${styles.projectSubheading} ${styles.zmzp}`}>{subheading}</p>
    </div>
  );
}