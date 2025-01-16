export default function Experience() {
  const experiences = [
    {
      title: "Junior QA Professional",
      company: "Alpha Lumen Institute",
      period: "2023 - 2025",
      responsibilities: [
				"Worked in a specialized team focused on quality assurance for the institutional website.",       
				"Implemented automated test cases using Cypress and Postman.",
      ]
    },
    {
      title: "Dev Aspirant",
      company: "AlphaEdTech Code Academy",
      period: "2021 - 2023",
      responsibilities: [
        "Participate actively in collaborative coding projects to develop practical skills and teamwork abilities.",
        "Engage in continuous learning by completing technical exercises, attending workshops, and exploring new technologies.",
				"Demonstrate accountability by meeting project deadlines, providing peer feedback, and contributing to a positive learning environment."
      ]
    }
  ]

  return (
    <section id="experience" className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.period}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

