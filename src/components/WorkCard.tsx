import SkillTag, { type SkillTagProps } from "./SkillTag";

interface WorkCardProps {
  title: string;
  content: string;
  titleDescription: string;
  skills: SkillTagProps[];
}

function WorkCard({ title, content, skills, titleDescription }: WorkCardProps) {
  return (
    <div className="project-card">
      <div className="project-card-details">
        <h3>{title}</h3>
        <span className="card-subtitle">{titleDescription}</span>
        <p>{content}</p>
        <div className="project-card-links"></div>
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

export default WorkCard;
export type { WorkCardProps };
