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
      "Easy to use: Make existing logistics system more efficient, safe, cheap, and easy to use.",
      "Deliver a minimal design: The design should be minimal and uncluttered, with a focus on simplicity and ease of use.",
      "Design a part-loading feature/flow for seamless logistics: Create a feature or flow that enables seamless part-loading for logistics, streamlining the process for maximum efficiency.",
      "Portray end-to-end supply-chain visibility to customers: Provide customers with a clear, end-to-end view of the supply chain, giving them insight into the entire process from start to finish.",
      "Ensure the driver app is simple to use with minimal distractions: The driver app should be designed with simplicity in mind, avoiding unnecessary distractions and focusing on the core functionality.",
    ],
    visualDesignsImages: ["targo-vd-1.png", "targo-vd-2.png"],
    visualDesignVideo: "targo-vd-video.mov",
    designApproach: [
      "Research and define user personas for both customers and delivery drivers.",
      "Create a user flow that outlines the steps involved in using the TARGO platform, from signing up to tracking shipments.",
      "Develop wireframes and low-fidelity prototypes to test the user flow and refine the design.",
      "Create a high-fidelity design for the mobile app and web admin dashboard, incorporating TARGO's branding and visual identity.",
      "Conduct user testing and iterate the design based on feedback.",
      "Implement real-time tracking and monitoring functionality for both customers and delivery drivers.",
      "Ensure that the mobile app is optimized for both iOS and Android platforms.",
      "Incorporate advanced security features such as digital signature capture and machine learning-based tracking.",
      "Design an admin dashboard for truck monitoring and management, incorporating advanced logistics algorithms for optimizing routes and schedules.",
      "Test and refine the design based on user feedback   and evolving business needs.",
    ],
    toolsUsed: "Figma, Adobe Illustrator, Balsamiq, Miro, Maze",
    mobileUserInterfaces: [
      "1-mobile-targo.png",
      "2-mobile-targo.png",
      "3-mobile-targo.png",
      "4-mobile-targo.png",
      "5-mobile-targo.png",
      "6-mobile-targo.png",
      "7-mobile-targo.png",
      "8-mobile-targo.png",
      "9-mobile-targo.png",
    ],
    webUserInterfaces: [
      "1-web-targo.png",
      "2-web-targo.png",
      "3-web-targo.png",
      "4-web-targo.png",
    ],
    results:
      "The client was extremely pleased with the final result, which incorporated their unique part-loading system and advanced logistics algorithms into an intuitive and easy-to-use interface. The real-time tracking and monitoring features for both customers and delivery drivers, as well as the admin dashboard for truck monitoring and management, were particularly impressive.",
  },
  {
    id: "trustngo",
    mainTitle: "TrustN’GO - Decentralised donation Platform",
    labels: ["Web App", "UI Design", "UX Design", "Smart India Hackathon 2022"],
    description:
      "TrustN’GO also pronounced as Trust’n’GO is a project we built for the Smart India Hackathon 2022, where our team created a secure funding platform for the donors to ensure that all of their money reaches the right cause. This project secured 2nd Place in the Smart India Hackathon 2022. I served as the UI designer for this project.",
    duration: "24 hours",
    screens: "30",
    role: "UI & UX Designer",
    projectImage: "/images/tng-1.png",
    projectScope: "Design a web portal for 3 users!",
    projectGoals: [
      "Design landing pages for donors and NGOs, keeping user experience and aesthetics in mind.",
      "Perform UX Research and set up visual components for the platform.",
      "User-centred design approach to create an optimal user journey and flow.",
      "Collaborate with the development team to understand the technical requirements of the project.",
      "Prepare wireframes, mock-ups, and presentations to showcase the project's design and progress.",
    ],
    visualDesigns: ["tng-2.png", "tng-3.png"],
    designApproach: [
      "Understand the problem statement.",
      "Gather Inspiration and prepare mood-boards for the design concept.",
      "Align colors according to Web3.0 Standards.",
      "Design an intuitive and simple user-interface.",
      "The App must be easy to use for users within age group of 18-60.",
    ],
    toolsUsed: "Figma, Adobe Illustrator, Adobe Photoshop, Canva",
    mobileUserInterfaces: [],
    webUserInterfaces: [],
    results:
      "Our landing pages for donors and NGOs were designed with both aesthetics and usability in mind, while your research and visual components set the foundation for an optimal user journey and flow. We presented the UI prototype to the judges who were extremely pleased with the design of the platform.",
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
        <div className={styles.visualContentContainer}>
          <div>
            <div className={styles.visualDesignImage1}>
              <Image
                src={`/images/${project.visualDesignsImages[0]}`}
                alt={`/images/${project.visualDesignsImages[0]}`}
                fill
              />
            </div>
            <div className={styles.visualDesignImage1}>
              <Image
                src={`/images/${project.visualDesignsImages[1]}`}
                alt={`/images/${project.visualDesignsImages[1]}`}
                fill
              />
            </div>
          </div>
          <div>
            <video
              className={styles.visualDesignVideo}
              src={`/videos/${project.visualDesignVideo}`}
              autoPlay
              loop
              typeof="video/mov"
            ></video>
          </div>
        </div>
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
      {project.mobileUserInterfaces.length > 0 ? (
        <div className={`${styles.mobileInterface}`}>
          <div className={`${styles.alignment}`}>
            <h3 className={styles.contentHeading}>Mobile User Interfaces</h3>
            <div className={styles.interfaceContainer}>
              {project.mobileUserInterfaces.map((image: string) => (
                <div key={image} className={styles.interfaceImageContainer}>
                  <Image src={`/images/${image}`} alt={image} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {project.webUserInterfaces.length > 0 ? (
        <div className={`${styles.mobileInterface}`}>
          <div className={`${styles.alignment}`}>
            <h3 className={styles.contentHeading}>Web User Interfaces</h3>
            <div className={styles.interfaceContainer}>
              {project.webUserInterfaces.map((image: string) => (
                <div key={image} className={styles.webInterfaceImageContainer}>
                  <Image src={`/images/${image}`} alt={image} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
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