export default function Projects() {
  const projects = [
    {
      title: "Knowledge Olympiads Platform Testing",
      description: "Created and debuged end-to-end test user journeys with cypress.",
      technologies: ["Cypress", "React", "TypeScript"]
    },
    {
      title: "API Automated Test",
      description: "Developed dynamic test cases for APIs with Postman, focus on functionality and load tests.",
      technologies: ["Postman", "JMeter", "Python", "Flask"]
    }
  ]

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

