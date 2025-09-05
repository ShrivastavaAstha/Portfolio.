import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';


interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
  title: "Talkify",
  description: "Talkify is a cutting-edge real-time language exchange and communication platform that seamlessly integrates instant messaging, high-quality video calls, and social interactions. Users can connect globally, practice multiple languages, react to messages with emojis, delete messages for everyone, and customize their experience with 32 UI themes, making language learning and socializing effortless and engaging.",
  image: "https://www.freepik.com/free-vector/friends-video-calling-concept_7607439.htm#fromView=keyword&page=1&position=39&uuid=d72653fc-da70-4703-8f3f-c072f4b551f6&query=Video+call", 
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Stream Chat SDK",
    "Stream Video SDK",
    "TanStack Query",
    "Zustand",
  ],
  liveUrl: "https://talkify-inky.vercel.app/",
  githubUrl: "https://github.com/shrivastavaastha/talkify"
}

    {
      title: "AiChatApp",
      description: "It’s a real-time AI-powered collaboration platform that combines instant messaging with AI assistance, helping users collaborate efficiently in one place.",
      image: "https://media.istockphoto.com/id/1933417108/photo/ai-chatbot-artificial-intelligence-concept.jpg?s=2048x2048&w=is&k=20&c=0vyuUTGrtFH_u13z0_b1icMS6vokRftmcQ4dyU0QZbA=",
      technologies: ["React.js" , "Tailwind CSS" , "Node.js" , "Express.js" , "MongoDB" , "Redis" , "Socket.IO" , "JWT" ," Web Container API ", "Google Generative AI API"],
      liveUrl: "http://ai-chat-app-omega-six.vercel.app",
      githubUrl: "https://github.com/ShrivastavaAstha/AI-ChatApp"
    },
     {
      title: "MedCare",
      description: "A full-stack role-based healthcare platform featuring secure JWT authentication, appointment scheduling, doctor management, real-time chat with Socket.IO, medical record handling, and an admin dashboard with analytics. Integrated Cloudinary image storage and PWA support.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      technologies: ["React.js", "Node.js", "Express.js " ,"MongoDB" ,"Socket.IO", "JWT","Multer", "Socket.io"],
      liveUrl: "http://medcare-nine-alpha.vercel.app",
      githubUrl: "https://github.com/ShrivastavaAstha/Hospital-Management-System"
    },
       {
      title: "CiNova",
      description: "Movie Discovery Platform - A responsive web app built with React.js that allows users to search and explore 10,000+ movies using third-party APIs, with features like JWT-based authentication, personalized watchlists, and optimized components for seamless performance.",
      image: "https://images.pexels.com/photos/29942709/pexels-photo-29942709.jpeg",
      technologies: ["Javascript", "React", "Node.js","Express.js", "MongoDB","Restful Api"],
      liveUrl: "https://cinova-u7zp.onrender.com",
      githubUrl: "https://github.com/ShrivastavaAstha/CINOVABACKEND"
    },
    {
      title: "Student Portal",
      description: "Student Portal – A frontend application for students  with student registration & profile management, calaender and activity log, attendance and result tracking, push notifications, and PWA support for seamless offline access across devices.",
      image: "https://static-blog.onlyoffice.com/wp-content/uploads/2023/08/04132139/halston-stephenson-paod-student-portal-dashboard.jpg",
      technologies: ["Javascript", "React", "Node.js","Express.js", "MongoDB","Restful Api"],
      liveUrl: "http://student-app-rouge-nine.vercel.app",
      githubUrl: "https://github.com/ShrivastavaAstha/StudentApp"
    },
    {
      title: "Task Management App",
      description: "Boost your productivity with TaskMaster! Organize your to-dos, set deadlines, and track progress with ease. Achieve your goals efficiently and effortlessly.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Javascript","CSS", "React", "Node.js","Express.js", "MongoDB", "Toastify"],
      liveUrl: "https://taskmanager2.onrender.com",
      githubUrl: "https://github.com/ShrivastavaAstha/Task-Management/tree/master"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Weather App – A responsive web application that provides real-time weather updates, location-based forecasts, and dynamic UI with API integration, enabling users to check temperature, humidity, and conditions with an intuitive interface.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      liveUrl: "https://shrivastavaastha.github.io/WeatherApp/",
      githubUrl: "https://github.com/ShrivastavaAstha/WeatherApp/tree/master"
    },
       {
      title: "Guessing Game",
      description: "A gamming app to guess random numbers between 1-100 within a limited number of attempts.",
      image:"https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg", 
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shrivastavaastha.github.io/JS-Guessing-Game/",
      githubUrl: "https://github.com/ShrivastavaAstha/JS-Guessing-Game"
    }
    // ,
    //    {
    //   title: "Snake Game",
    //   description: " Relive the nostalgia with Classic Snake! Guide your snake to eat food and grow longer without crashing into the walls or yourself.",
    //   image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   liveUrl: "https://shrivastavaastha.github.io/Js-Snake-Game/",
    //   githubUrl: "https://github.com/ShrivastavaAstha/Js-Snake-Game"
    // }
    ,
       {
      title: "Piano",
      description: " Unleash your musical talent with Playable Piano ! Whether you are a beginner or an experienced pianist, Playable Piano offers a realistic and interactive piano experience.",
      image: "https://images.pexels.com/photos/164935/pexels-photo-164935.jpeg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shrivastavaastha.github.io/JS-Piano/",
      githubUrl: "https://github.com/ShrivastavaAstha/JS-Piano"   
    }
    ,
       {
      title: "GitHub Profile App",
      description: "Instantly access and showcase any GitHub user's profile with GitHub Profile Fetcher! Simply enter a username to fetch and display comprehensive details, including repositories, contributions, and activity.",
      image: "https://www.upbeatcode.com/static/def44645fce079b83d3f28a789de3d98/b316c/github-before.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shrivastavaastha.github.io/JS-GitHub-Profile-App/ ",
      githubUrl: "https://github.com/ShrivastavaAstha/JS-GitHub-Profile-App",  
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
           <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500"
          />
            
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here are some of my featured projects that demonstrate my skills in building scalable full-stack applications, crafting intuitive UI/UX designs, and solving real-world problems through code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl}
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all ${
                      darkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all border ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
