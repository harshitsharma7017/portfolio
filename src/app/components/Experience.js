"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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

// Lazy load GitHub Calendar to improve initial load
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
    </div>
  )
});

export default function Experience() {
  const [contributionData, setContributionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized language data to avoid recalculation
  const languageData = useMemo(() => {
    const skills = [
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "React.js", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "TypeScript", category: "language" },
      { name: "HTML", category: "frontend" },
      { name: "CSS", category: "frontend" },
      { name: "Python", category: "language" },
      { name: "C", category: "language" },
      { name: "Fastify", category: "backend" },
      { name: "Solidity", category: "blockchain" },
    ];

    const langCount = skills.reduce((acc, { name, category }) => {
      if (["language", "frontend", "backend", "blockchain"].includes(category)) {
        acc[name] = (acc[name] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(langCount).map(([lang, count]) => ({
      name: lang,
      value: count,
    }));
  }, []);

  useEffect(() => {
    let mounted = true;
    
    const fetchContributions = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
        
        const response = await fetch(
          "https://github-contributions-api.deno.dev/harshitsharma7017.json",
          { 
            signal: controller.signal,
            headers: { 'Accept': 'application/json' }
          }
        );
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        
        if (mounted && data?.contributions) {
          const flattened = data.contributions.flat();
          const monthly = flattened.reduce((acc, { date, contributionCount }) => {
            const month = date.slice(0, 7);
            const existing = acc.find((m) => m.month === month);
            if (existing) {
              existing.count += contributionCount;
            } else {
              acc.push({ month, count: contributionCount });
            }
            return acc;
          }, []);
          
          // Limit to last 12 months for better performance
          const sortedData = monthly
            .sort((a, b) => a.month.localeCompare(b.month))
            .slice(-12);
          
          setContributionData(sortedData);
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
        // Fallback data
        if (mounted) {
          setContributionData([
            { month: "2024-01", count: 45 },
            { month: "2024-02", count: 52 },
            { month: "2024-03", count: 38 },
            { month: "2024-04", count: 61 },
            { month: "2024-05", count: 43 },
            { month: "2024-06", count: 37 }
          ]);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchContributions();
    
    return () => {
      mounted = false;
    };
  }, []);

  const chartColors = useMemo(() => [
    "#6366f1", "#4f46e5", "#3b82f6", "#0ea5e9", "#14b8a6", "#fbbf24", "#7f1d1d"
  ], []);

  // Memoized task list to avoid recreation
  const taskList = useMemo(() => [
    "Developed and optimized RESTful APIs using Node.js and Express.js.",
    "Integrated MongoDB for efficient data storage and retrieval.",
    "Designed and implemented JWT-based authentication and role-based access control.",
    "Collaborated with frontend developers to ensure seamless API integration with React.js.",
    "Implemented background job processing using BullMQ for handling async tasks efficiently.",
    "Optimized database queries, improving API response times by 30%.",
    "Monitored and debugged application performance using Postman, Jest, and New Relic.",
  ], []);

  // Custom tooltip for the bar chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-700/90 backdrop-blur-sm p-3 rounded-lg border border-emerald-500/30 shadow-lg">
          <p className="text-emerald-400 font-medium">{`Month: ${label}`}</p>
          <p className="text-white">{`Contributions: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for the pie chart
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-700/90 backdrop-blur-sm p-3 rounded-lg border border-emerald-500/30 shadow-lg">
          <p className="text-emerald-400 font-medium">{`${payload[0].name}`}</p>
          <p className="text-white">{`Usage: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-emerald-500/20 transition-transform hover:scale-[1.01] duration-200 hover:shadow-2xl hover:shadow-emerald-500/10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-emerald-400">Junior Backend Developer</h3>
            <p className="text-slate-400">August 2024 - Present</p>
          </div>

          <p className="text-lg font-medium text-white mb-2">Dehix</p>
          <p className="text-slate-300 mb-4">
            Dehix specializes in web application development, focusing on scalable solutions and modern technologies.
          </p>

          <ul className="list-none space-y-3">
            {taskList.map((task, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="text-emerald-400 mt-1 flex-shrink-0">✔</span>
                <span className="text-slate-300">{task}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* GitHub Contributions Calendar */}
        <motion.div
          className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-md rounded-xl shadow-xl p-6 border border-emerald-500/20 mb-12 hover:shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center text-emerald-400 mb-4">
            GitHub Contributions
          </h3>
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="harshitsharma7017"
              blockSize={12}
              blockMargin={4}
              colorScheme="dark"
              fontSize={12}
              hideColorLegend={false}
              hideMonthLabels={false}
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
          {/* Bar Chart */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-slate-800/50 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-200 border border-emerald-500/20 backdrop-blur-sm"
          >
            <h4 className="text-lg font-semibold text-center text-emerald-400 mb-4">
              Monthly Contributions
            </h4>
            {isLoading ? (
              <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contributionData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.7} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12, fill: "#9CA3AF" }} 
                    tickLine={false} 
                    axisLine={{ stroke: "#374151" }} 
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: "#9CA3AF" }} 
                    tickLine={false} 
                    axisLine={{ stroke: "#374151" }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill="url(#barGradient)" 
                    radius={[4, 4, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-slate-800/50 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-200 border border-emerald-500/20 backdrop-blur-sm"
          >
            <h4 className="text-lg font-semibold text-center text-emerald-400 mb-4">
              Technology Stack
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <defs>
                  {chartColors.map((color, index) => (
                    <linearGradient key={index} id={`pieGradient${index}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.6} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  className="text-xs font-medium"
                >
                  {languageData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#pieGradient${index % chartColors.length})`}
                      className="hover:opacity-80 transition-opacity duration-200"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}