export default function Skills() {
    const skills = [
      { name: 'Node.js', category: 'backend' },
      { name: 'Express.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'React.js', category: 'frontend' },
      { name: 'JavaScript', category: 'language' },
      { name: 'TypeScript', category: 'language' },
      { name: 'HTML', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
      { name: 'Git', category: 'tool' },
      { name: 'GitHub', category: 'tool' },
      { name: 'Python', category: 'language' },
      { name: 'C', category: 'language' },
      { name: 'Fastify', category: 'backend' },
      { name: 'Solidity', category: 'blockchain' }
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 font-medium"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }