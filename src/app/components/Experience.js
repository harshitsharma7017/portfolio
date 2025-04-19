"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Experience() {
  const [contributionData, setContributionData] = useState([]);
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    // Fetch Contributions (Bar Chart)
    fetch("https://github-contributions-api.deno.dev/harshitsharma7017.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions) {
          const flattenedContributions = data.contributions.flat(); // Flatten weekly contributions
          const monthlyContributions = flattenedContributions.reduce(
            (acc, { date, contributionCount }) => {
              const month = date.slice(0, 7); // Extract YYYY-MM format
              const existingMonth = acc.find((m) => m.month === month);
              if (existingMonth) {
                existingMonth.count += contributionCount;
              } else {
                acc.push({ month, count: contributionCount });
              }
              return acc;
            },
            []
          );
          setContributionData(monthlyContributions);
        }
      })
      .catch((error) => console.error("Error fetching contributions:", error));

    // Static Language Data for Pie Chart
    const skills = [
      { name: "Node.js", category: "backend", logo: "/logos/nodejs.png" },
      { name: "Express.js", category: "backend", logo: "/logos/express.png" },
      { name: "MongoDB", category: "database", logo: "/logos/mongodb.png" },
      { name: "React.js", category: "frontend", logo: "/logos/react.png" },
      { name: "JavaScript", category: "language", logo: "/logos/javascript.png" },
      { name: "TypeScript", category: "language", logo: "/logos/typescript.png" },
      { name: "HTML", category: "frontend", logo: "/logos/html5.png" },
      { name: "CSS", category: "frontend", logo: "/logos/css3.png" },
      { name: "Git", category: "tool", logo: "/logos/git.png" },
      { name: "GitHub", category: "tool", logo: "/logos/github.png" },
      { name: "Python", category: "language", logo: "/logos/python.png" },
      { name: "C", category: "language", logo: "/logos/c.png" },
      { name: "Fastify", category: "backend", logo: "/logos/fastify.png" },
      { name: "Solidity", category: "blockchain", logo: "/logos/solidity.png" },
    ];

    const languageCounts = skills.reduce((acc, { name, category }) => {
      if (category === "language" || category === "frontend" || category === "backend" || category === "blockchain") {
        acc[name] = (acc[name] || 0) + 1;
      }
      return acc;
    }, {});

    const pieData = Object.entries(languageCounts).map(([lang, count]) => ({
      name: lang,
      value: count,
    }));
    setLanguageData(pieData);
  }, []);

  const chartColors = ["#6366f1", "#4f46e5", "#3b82f6", "#0ea5e9", "#14b8a6", "#fbbf24", "#7f1d1d"];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Junior Backend Developer</h3>
            <p className="text-gray-500">August 2024 - Present</p>
          </div>

          <p className="text-lg font-medium text-gray-900 mb-2">Dehix</p>

          <p className="text-gray-600 mb-4">
            Dehix specializes in web application development, focusing on scalable solutions and modern technologies.
          </p>

          <ul className="list-none space-y-3">
            {[
              "Developed and optimized RESTful APIs using Node.js and Express.js.",
              "Integrated MongoDB for efficient data storage and retrieval.",
              "Designed and implemented JWT-based authentication and role-based access control.",
              "Collaborated with frontend developers to ensure seamless API integration with React.js.",
              "Implemented background job processing using BullMQ for handling async tasks efficiently.",
              "Optimized database queries, improving API response times by 30%.",
              "Monitored and debugged application performance using Postman, Jest, and New Relic."
            ].map((task, index) => (
              <motion.li 
                key={index} 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-blue-500">✔</span>
                <span className="text-gray-700">{task}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* GitHub Contributions Calendar */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-4">
            GitHub Contributions
          </h3>
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="harshitsharma7017"
              blockSize={15}
              blockMargin={5}
              colorScheme="light"
              fontSize={14}
            />
          </div>
        </motion.div>

        {/* GitHub Stats Graphs */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Bar Chart - Monthly Contributions */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h4 className="text-lg font-semibold text-center text-blue-600 mb-4">
              Monthly Contributions
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contributionData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4B5563" }} tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <YAxis tick={{ fontSize: 12, fill: "#4B5563" }} tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    fontSize: "14px",
                  }}
                  labelStyle={{ color: "#4B5563", fontWeight: "500" }}
                  formatter={(value) => [`${value} contributions`, "Total"]}
                />
                <Bar dataKey="count" fill="url(#barGradient)" radius={[8, 8, 0, 0]} animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Languages */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h4 className="text-lg font-semibold text-center text-indigo-600 mb-2">Languages Used</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={languageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
