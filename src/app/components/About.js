"use client";
import { motion } from "framer-motion";
import { memo } from "react";

// Memoized animated background to prevent unnecessary re-renders
const AnimatedBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
  </div>
));

AnimatedBackground.displayName = 'AnimatedBackground';

// Animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const hoverVariants = {
  scale: 1.02,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20
  }
};

// Memoized card component
const InfoCard = memo(({ title, children, className = "", direction = "left" }) => (
  <motion.div 
    className={`md:w-1/2 bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 ${className}`}
    variants={cardVariants}
    whileHover={hoverVariants}
    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="text-2xl font-semibold mb-4 text-emerald-400">{title}</h3>
    {children}
  </motion.div>
));

InfoCard.displayName = 'InfoCard';

// Memoized education item component
const EducationItem = memo(({ degree, institution, period, borderColor, bgColor }) => (
  <div className={`border-l-4 ${borderColor} pl-4 ${bgColor} py-3 rounded-r-lg transition-colors duration-300 hover:bg-opacity-20`}>
    <p className="font-semibold text-white">{degree}</p>
    <p className="text-gray-300">{institution}</p>
    <p className="text-teal-400 text-sm font-medium">{period}</p>
  </div>
));

EducationItem.displayName = 'EducationItem';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative"
      aria-labelledby="about-heading"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.h2 
          id="about-heading"
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Content Wrapper */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Who I Am */}
          <InfoCard title="Who I Am" direction="left">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am a <span className="font-semibold text-emerald-400">Junior Backend Developer</span> passionate about building scalable web applications using the <span className="font-semibold text-teal-400">MERN stack</span>. 
                I focus on <span className="text-emerald-400 font-medium">efficient backend solutions</span> and database optimization to enhance user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing <span className="font-semibold text-teal-400">B.Tech at MIET Meerut</span>, I am always eager to learn new technologies and improve my skills.
              </p>
            </div>
            
            {/* Skills highlight */}
            <div className="mt-6 pt-4 border-t border-emerald-500/20">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'React.js', 'MongoDB', 'Express.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </InfoCard>

          {/* Education */}
          <InfoCard title="Education" direction="right">
            <div className="space-y-6">
              <EducationItem
                degree="B.Tech in Computer Science"
                institution="Meerut Institute of Engineering and Technology"
                period="August 2021 - Present"
                borderColor="border-emerald-500"
                bgColor="bg-emerald-500/5"
              />
              <EducationItem
                degree="12th Grade"
                institution="Scottish International School"
                period="April 2020 - March 2021"
                borderColor="border-teal-500"
                bgColor="bg-teal-500/5"
              />
            </div>

            {/* Achievement highlight */}
            <div className="mt-6 pt-4 border-t border-teal-500/20">
              <h4 className="text-sm font-semibold text-teal-400 mb-2">Current Focus</h4>
              <p className="text-gray-300 text-sm">
                Specializing in backend development while maintaining strong full-stack capabilities
              </p>
            </div>
          </InfoCard>

        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects', value: '10+', color: 'text-emerald-400' },
              { label: 'Technologies', value: '15+', color: 'text-teal-400' },
              { label: 'Experience', value: '1+ Year', color: 'text-cyan-400' },
              { label: 'Learning', value: 'Always', color: 'text-emerald-400' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}