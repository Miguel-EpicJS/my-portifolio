export default function Skills() {
  const skills = [
    "Manual Testing", "Automated Testing", "Cypress", "JMeter", "Pytest",
    "Performance Testing", "Load Testing", "API Testing", "Postman", "SQL", "NoSQL",
    "JIRA", "Agile Methodologies", "Python", "JavaScript", "TypeScript"
  ]

  return (
    <section id="skills" className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

