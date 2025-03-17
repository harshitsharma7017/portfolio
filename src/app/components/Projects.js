export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Task Management System</h3>
                <p className="text-gray-600 mb-4">MERN Stack</p>
                <p className="text-gray-700 mb-4">
                  A task management system built using the MERN stack
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Developed a full-stack task management system where users can create, update, and track tasks</li>
                  <li>Used Express.js and MongoDB for backend APIs and React.js for the frontend</li>
                  <li>Implemented JWT-based authentication and role-based access control</li>
                </ul>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Real-time Chat Application</h3>
                <p className="text-gray-600 mb-4">Node.js, WebSockets, MongoDB, React.js</p>
                <p className="text-gray-700 mb-4">
                  A real-time chat application facilitating instant messaging
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Built a chat application with real-time messaging functionality using WebSockets</li>
                  <li>Designed a scalable backend using Node.js and Express.js</li>
                  <li>Stored user messages in MongoDB and implemented user authentication with JWT</li>
                </ul>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Attendance Tracker Application</h3>
                <p className="text-gray-600 mb-4">Node.js, MongoDB, Flutter Integration</p>
                <p className="text-gray-700 mb-4">
                  An attendance tracking system utilizing location check-ins
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Developed an API for a location-based attendance system for employees/students</li>
                  <li>Integrated MongoDB for attendance records and Express.js for API routes</li>
                  <li>Implemented geofencing to restrict check-ins to specific locations</li>
                </ul>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }