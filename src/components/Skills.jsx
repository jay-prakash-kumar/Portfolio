// import { motion } from "framer-motion";
// import { fadeIn, staggerContainer, textVariant } from "../utils/motion.js";

// export default function Skills() {
//   const categories = [
//     {
//       title: "Languages",
//       items: ["C++", "Java", "Python", "JavaScript", "C"],
//     },
//     {
//       title: "Frontend & UI",
//       items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma", "Redux", "TypeScript"],
//     },
//     {
//       title: "Backend Core",
//       items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
//     },
//     {
//       title: "Dev & Ops",
//       items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
//     },
//     {
//       title: "Professional",
//       items: ["Problem Solving", "Collaboration", "Communication", "Time Mgmt", "Adaptability", "Fast Learner"],
//     }
//   ];

//   return (
//     <section id="skills" className="section" style={{ padding: "4rem 0", minHeight: "85vh", display: "flex", alignItems: "center" }}>
//       <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

//         <motion.div 
//            variants={textVariant()}
//            initial="hidden"
//            whileInView="show"
//            viewport={{ once: true, amount: 0.25 }}
//            style={{ textAlign: "center", marginBottom: "3rem" }}
//         >
//           <h2 className="section-title" style={{ marginBottom: "1rem" }}>
//             Tech <span className="text-highlight">Dashboard</span>
//           </h2>
//           <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
//             A dense, single-view comprehensive map of my technical and professional stack without the need to scroll.
//           </p>
//         </motion.div>

//         <motion.div 
//            variants={staggerContainer(0.1, 0)}
//            initial="hidden" 
//            whileInView="show" 
//            viewport={{ once: true, amount: 0.1 }}
//            className="skills-dashboard"
//         >
//           {categories.map((cat, index) => (
//             <motion.div 
//                variants={fadeIn("up", "tween", index * 0.1, 0.6)} 
//                key={index} 
//                className="dashboard-card"
//             >
//               <h3 className="dashboard-card-title">{cat.title}</h3>
//               <div className="dashboard-card-tags">
//                 {cat.items.map((skill, sIndex) => (
//                   <span key={sIndex} className="dashboard-tag">{skill}</span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <style dangerouslySetInnerHTML={{__html: `
//           .skills-dashboard {
//             display: grid;
//             grid-template-columns: repeat(5, 1fr);
//             gap: 1.5rem;
//           }
//           .dashboard-card {
//             background: var(--nav-bg);
//             border: 1px solid rgba(255, 255, 255, 0.05);
//             border-radius: 16px;
//             padding: 1.5rem 1.2rem;
//             display: flex;
//             flex-direction: column;
//             gap: 1.2rem;
//             transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
//             position: relative;
//             overflow: hidden;
//             box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//             backdrop-filter: blur(10px);
//           }
//           .dashboard-card::before {
//             content: '';
//             position: absolute;
//             top: 0; left: 0; right: 0; height: 3px;
//             background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
//             opacity: 0.3;
//             transition: opacity 0.3s ease;
//           }
//           .dashboard-card:hover {
//             transform: translateY(-8px);
//             border-color: rgba(255,255,255, 0.15);
//             box-shadow: 0 12px 30px rgba(0,0,0,0.3);
//           }
//           .dashboard-card:hover::before {
//             opacity: 1;
//           }
//           .dashboard-card-title {
//             font-size: 1rem;
//             color: var(--accent-color);
//             margin: 0;
//             font-weight: 700;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//             text-align: center;
//           }
//           .dashboard-card-tags {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.6rem;
//           }
//           .dashboard-tag {
//             background: rgba(255,255,255,0.03);
//             border: 1px solid rgba(255,255,255,0.08);
//             border-radius: 6px;
//             padding: 0.4rem 0.8rem;
//             font-size: 0.85rem;
//             color: var(--text-secondary);
//             font-weight: 500;
//             transition: all 0.3s ease;
//             cursor: default;
//           }
//           .dashboard-tag:hover {
//             background: var(--text-primary);
//             color: var(--bg-primary);
//             border-color: var(--text-primary);
//             transform: scale(1.05);
//             box-shadow: 0 4px 10px rgba(255,255,255,0.1);
//           }

//           /* Responsive adjustments */
//           @media (max-width: 1024px) {
//             .skills-dashboard {
//               grid-template-columns: repeat(3, 1fr);
//             }
//           }
//           @media (max-width: 768px) {
//             .skills-dashboard {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
//           @media (max-width: 480px) {
//             .skills-dashboard {
//               grid-template-columns: 1fr;
//             }
//           }
//         `}} />
//       </div>
//     </section>
//   );
// }

import { Terminal } from "lucide-react";

export default function Skills() {
  const technicalCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "C"],
    },
    {
      title: "Frontend & UI/UX",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Redux",
        "TypeScript",
      ],
    },
    {
      title: "Backend ",
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
      ],
    },
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Fast Learner",
    "Goal-Oriented",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-highlight">Capabilities</span>
        </h2>

        <div className="skills-grid">
          {technicalCategories.map((category, index) => (
            <div
              key={index}
              className="card glass-effect"
              style={{
                padding: "2.5rem 2rem",
                gap: "1.5rem",
                display: "flex",
                flexDirection: "column",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
              }}
            >
              <h3
                className="gradient-text"
                style={{
                  fontSize: "1.8rem",
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                {category.title}
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {category.skills.map((skill, sIndex) => (
                  <div
                    key={sIndex}
                    style={{
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                      background: "var(--input-bg)",
                      border: "1px solid var(--glass-border)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.borderColor = "var(--accent-color)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              textAlign: "center",
              color: "var(--text-secondary)",
              fontWeight: "500",
            }}
          >
            Soft Skills
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-effect"
                style={{
                  padding: "0.8rem 1.5rem",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid var(--glass-border)",
                  color: "var(--text-primary)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "var(--accent-color)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(239, 68, 68, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Terminal size={16} className="text-highlight" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
