// app/components/Skills.jsx

export default function Skills() {
  const skills = [
    "Python",
    "HTML5",
    "CSS3",
    "Javascript",
    "React.js",
    "Typescript",
    "Next.js",
    "Tailwind Css",
    "Postgresql",
    "Git & Github",
    "RESTful APIs",
    "FastApi"
  ]

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div> <br />
    </section> 
  )
}
