// export default function Skills() {
//   const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "MySQL", "Git"];

//   return (
//     <section id="Skills" className="min-h-screen bg-white px-6 py-16">
//       <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
//       <div className="flex flex-wrap justify-center gap-4">
//         {skills.map((skill, index) => (
//           <span key={index} className="px-6 py-3 bg-gray-200 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition">
//             {skill}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React",
      desc: "Building dynamic UI components with React.",
      icon: <FaReact size={40} />,
    },
    {
      name: "Tailwind CSS",
      desc: "Rapidly styling components with utility classes.",
      icon: <SiTailwindcss size={40} />,
    },
    {
      name: "JavaScript",
      desc: "Core language for interactivity and logic.",
      icon: <FaJsSquare size={40} />,
    },
    {
      name: "Node.js",
      desc: "Backend development with JavaScript runtime.",
      icon: <FaNodeJs size={40} />,
    },
    {
      name: "Express.js",
      desc: "Minimal and flexible Node.js framework for building APIs.",
      icon: <SiExpress size={40} />,
    },
    {
      name: "MongoDB",
      desc: "NoSQL database for modern, scalable applications.",
      icon: <SiMongodb size={40} />,
    },
    {
      name: "MySQL",
      desc: "Relational database design and querying.",
      icon: <FaDatabase size={40} />,
    },
    {
      name: "Git",
      desc: "Version control and collaboration.",
      icon: <FaGitAlt size={40} />,
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl">
        {skills.map(({ name, desc, icon }) => (
          <div
            key={name}
            className="group perspective w-32 h-32 cursor-pointer"
          >
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <div className="absolute w-full h-full bg-gray-900 text-white rounded-full flex flex-col items-center justify-center gap-2 backface-hidden shadow-lg">
                {icon}
                <span className="text-sm font-semibold">{name}</span>
              </div>

              <div className="absolute w-full h-full bg-white text-gray-800 rounded-full p-4 backface-hidden rotate-y-180 shadow-lg flex items-center justify-center text-center">
                <p className="text-xs">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
