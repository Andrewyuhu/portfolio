import { Link } from "react-router";
import SkillTag, { type SkillTagProps } from "./SkillTag";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  content: string;
  page: string;
  repo: string;
  skills: SkillTagProps[];
}

function ProjectCard({
  title,
  content,
  page,
  repo,
  skills,
  subtitle,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card-details">
        <div className="project-card-headings">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <p>{content}</p>
        <div className="project-card-links">
          {page && <Link to={page}>More</Link>}
          {repo && <a href={repo}>Repo</a>}
        </div>
      </div>
      <div className="project-card-skills">
        {skills.map((skill) => (
          <SkillTag
            name={skill.name}
            color={skill.color}
            key={skill.name}
          ></SkillTag>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
export type { ProjectCardProps };
