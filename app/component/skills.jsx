// app/components/Skills.jsx

export default function Skills() {
  const skills = [
    "Python",
    "HTML5",
    "CSS3",
    "JS (ES6+)",
    "React.js",
    "Typescript",
    "Next.js",
    "Tailwind Css",
    "FastApi",
    "Postgresql",
    "Git & Github",
    "RESTful APIs",
  ]

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  )
}
