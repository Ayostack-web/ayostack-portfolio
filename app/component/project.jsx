// app/components/Projects.jsx

export default function Projects() {
  const projects = [
    {
      title: "🌐 Portfolio Website",
      description: "A responsive, personal portfolio to showcase my skills, projects, and contact info — built with clean design and smooth interactions.",
      link: "https://your-portfolio-url.com",
    },
    {
      title: "🍕 Pizza Ordering Website",
      description: "A sleek, responsive pizza ordering platform with interactive UI, real-time selections, and a tasty user experience.",
      link: "https://pizza-heaven-ge4m.vercel.app/#menu",
    },
    {
      title: "🖼️ Photo Gallery Website",
      description: "An interactive image gallery with smooth hover effects, zoom on click, and seamless navigation — designed for a clean visual experience.",
      link: "https://image-gallery-blush-sigma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="floating-card section tilt-card section">
      <h2 style={{ textAlign: "center" }}>Featured Projects</h2>
      <br />
      <div className="projects hero-text">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <br />
            <a
              href={project.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Project
            </a>
          </div>
        ))}
      </div> 
    </section> 
  );
}
