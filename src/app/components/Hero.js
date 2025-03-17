import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Harshit Sharma</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Junior Backend Developer</h2>
          <p className="text-lg mb-8">I build scalable web applications using the MERN stack with a focus on efficient backend solutions.</p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">View My Work</a>
            <a href="#contact" className="border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium">Contact Me</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
            {/* Replace with your actual image */}
            <Image 
              src="/HarshitSh.jpeg" 
              alt="Harshit Sharma" 
              layout="fill" 
              objectFit="cover" 
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  )
}