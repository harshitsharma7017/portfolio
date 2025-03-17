export default function Experience() {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold">Junior Backend Developer</h3>
              <p className="text-gray-600">August 2024 - Present</p>
            </div>
            <p className="text-gray-800 font-medium mb-4">Dehix</p>
            <p className="text-gray-700 mb-4">Dehix is a company specializing in web application development</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed and optimized RESTful APIs using Node.js and Express.js for a web application</li>
              <li>Integrated MongoDB for efficient data storage and retrieval</li>
              <li>Collaborated with frontend developers to ensure seamless integration with React.js</li>
              <li>Implemented authentication and authorization mechanisms for user security</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }