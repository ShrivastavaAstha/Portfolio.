import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaStar } from "react-icons/fa";

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-indigo-500 text-4xl mb-4 drop-shadow-lg" />,
      skills: [
        { name: "React.js (with Vite)", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML & CSS", level: 90 },
        { name: "Tailwind CSS / Plain CSS", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-500 text-4xl mb-4 drop-shadow-lg" />,
      skills: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "MongoDB", level: 92 },
        { name: "SQL (MySQL / PostgreSQL)", level: 86 },
        { name: "Authentication (JWT)", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-yellow-500 text-4xl mb-4 drop-shadow-lg" />,
      skills: [
        { name: "Git & GitHub", level: 94 },
        { name: "REST APIs", level: 90 },
        { name: "Socket.IO (Real-time)", level: 85 },
        { name: "Deployment (Vercel/Render)", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-28 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl top-12 left-10"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-3xl bottom-12 right-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500"
          />
          <p
            className={`text-lg max-w-2xl mx-auto mt-6 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            A well-rounded Full-Stack Developer skilled in crafting modern UIs,
            building secure backends, and deploying scalable web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`p-10 rounded-2xl shadow-xl border relative group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800/90 border-gray-700 hover:bg-gray-700/90"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3
                  className={`text-2xl font-semibold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="flex items-center gap-1 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < Math.round(skill.level / 20)
                                ? "text-yellow-400 drop-shadow"
                                : darkMode
                                ? "text-gray-600"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-24 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-2xl font-bold mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies I Work With
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Socket.IO",
              "Redux",
              "JWT Auth",
              "REST APIs",
              "Cloudinary",
              "Multer",
              "Redis",
              "Tailwind CSS",
              "Plain CSS",
              "Git & GitHub",
              "Postman",
              "VS Code",
              "CI/CD",
              "Problem Solving (DSA)",
              "C++",
              "OOPs",
              "DBMS",
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.12 }}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-md cursor-default transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <div className="mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-2xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Soft Skills
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                "Leadership",
                "Communication",
                "Team Collaboration",
                "Agile Thinking",
                "Adaptability",
                "Problem-Solving",
                "Time Management",
                "Creativity",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.12 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-md cursor-default transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
