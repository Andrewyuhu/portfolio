interface SkillTagProps {
  name: string;
  color: string;
}

function SkillTag({ name, color }: SkillTagProps) {
  return (
    <div className="skill-tag">
      <div className="circle" style={{ background: color }}></div>
      {name}
    </div>
  );
}

export default SkillTag;
export type { SkillTagProps };
