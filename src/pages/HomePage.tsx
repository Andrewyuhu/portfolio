import ProjectCard from "../components/ProjectCard";
import WorkCard from "../components/WorkCard";
import ContactForm from "../components/ContactForm";

function HomePage() {
  const projects = [
    {
      title: "Talky",
      subtitle: "Real Time Chat Application",
      content:
        "A real time chat app created with websockets using Vue for the frontend and Golang for the backend.",
      page: "/talky",
      repo: "",
      skills: [
        { name: "Go", color: "#78d4fd" },
        { name: "Vue", color: "#3dbb81" },
        { name: "Docker", color: "#339eee" },
        { name: "PostgreSQL", color: "#38668e" },
        { name: "TypeScript", color: "#3178c6" },
        { name: "Tailwind", color: "#23b5e5" },
      ],
    },
    {
      title: "Filey",
      subtitle: "File Storage Application",
      content:
        "A Google Drive like application which lets users upload their files and organize them online.",
      page: "",
      repo: "",
      skills: [
        { name: "Javascript", color: "#e8d44d" },
        { name: "React", color: "#0bd0f8" },
        { name: "Express", color: "#212121" },
        { name: "Node", color: "#3f8138" },
        { name: "PostgreSQL", color: "#38668e" },
        { name: "Prisma", color: "#02324c" },
        { name: "Tailwind", color: "#23b5e5" },
      ],
    },
    {
      title: "Vike and Sell",
      subtitle: "Used Marketplace Application",
      content:
        "A market place for University of Victoria students to sell used items and raise funds for charity.",
      page: "/vikeandsell",
      repo: "",
      skills: [
        { name: "TypeScript", color: "#3178c6" },
        { name: "React", color: "#0bd0f8" },
        { name: "Cypress", color: "#6acca8" },
        { name: "Docker", color: "#339eee" },
        { name: "PostgreSQL", color: "#38668e" },
        { name: "Tailwind", color: "#23b5e5" },
      ],
    },
    {
      title: "Personal Portfolio",
      subtitle: "",
      content: "This website you're currently on!",
      page: "",
      repo: "",
      skills: [
        { name: "TypeScript", color: "#3178c6" },
        { name: "React", color: "#0bd0f8" },
        { name: "SASS", color: "#c2528c" },
      ],
    },
  ];

  const jobs = [
    {
      title: "Information Technology Analyst",
      titleDescription: "University of Victoria ( 2022 - Present )",
      content:
        "An part-time position at the University of Victoria where I help support a community of other 20,000 students and faculty with their technical issues and promote cybersecurity awareness",
      repo: "",
      skills: [],
    },
    {
      title: "Climate Data Technician",
      titleDescription: "Government of Alberta ( Sept 2023 - April 2024 )",
      content:
        "An internship with the Government of Alberta where I assisted with creating an aggregrated ranked climate data used for water modeling of Alberta water basins.",
      repo: "",
      skills: [
        { name: "R", color: "#2468b8" },
        { name: "Python", color: "#f8d856" },
      ],
    },
  ];
  return (
    <>
      <section id="about-me">
        <h2>About me</h2>
        <p>
          Hey! I'm Andrew, a full-stack developer wrapping up my degree in
          Software Engineering. I love building clean, user-friendly interfaces
          and robust backend systems. I'm particularly excited about exploring
          new technologies, diving deeper into design principles, especially
          what makes a great user experience and learning more about creating
          scalable backend systems.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-section">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              content={project.content}
              page={project.page}
              skills={project.skills}
              repo={project.repo}
              key={project.title}
            ></ProjectCard>
          ))}
        </div>
      </section>
      <section id="work-experience">
        <h2>Work Experience</h2>
        <div className="project-section">
          {jobs.map((job) => (
            <WorkCard
              title={job.title}
              titleDescription={job.titleDescription}
              content={job.content}
              skills={job.skills}
              key={job.title}
            ></WorkCard>
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <ContactForm></ContactForm>
      </section>
    </>
  );
}

export default HomePage;
