
export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-700 mb-6">
                I am a Junior Backend Developer with experience in developing scalable web applications using the MERN stack. 
                I possess a strong understanding of backend development, API design, and database management. 
                My passion lies in building efficient and optimized solutions that enhance user experience.
              </p>
              <p className="text-gray-700 mb-6">
                Currently pursuing B.Tech from Meerut Institute of Engineering and Technology, I am always eager to learn new technologies and improve my skills.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="mb-6">
                <p className="font-semibold">B.Tech</p>
                <p className="text-gray-700">Meerut Institute of Engineering and Technology</p>
                <p className="text-gray-600">August 2021 - Present</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold">12th Grade</p>
                <p className="text-gray-700">Scottish International School</p>
                <p className="text-gray-600">April 2020 - March 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }