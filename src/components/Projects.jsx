// import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';
// import smartImg from '../assets/smart.png';
// import recycleImg from '../assets/recycle.png';
// import trafficImg from '../assets/traffic.png';
// import quizImg from '../assets/quiz.png';

// export default function Projects() {
//   const scrollRef = useRef(null);

//   const projects = [
//     {
//       title: 'Traffic Management System',
//       tech: 'React, Node, Javascript, Tailwind CSS, MongoDB',
//       desc: 'Developed an intelligent traffic control solution that detects vehicle number and detect accidents inform to traffic police and report the mishappenings.',
//       image: trafficImg,
//       github: 'https://github.com/jay-prakash-kumar/Traffic-Management',
//       live: 'https://traffic-management-client.onrender.com/'
//     },
//     {
//       title: 'Smart Home',
//       tech: ' HTML, Tailwind CSS, JavaScript, PHP, PHP Mailer',
//       desc: 'A centralized smart home platform enabling users to control devices, track energy usage, and receive intelligent notifications.',
//       image: smartImg,
//       github: 'https://github.com/jay-prakash-kumar/Smart_Home',
//       live: 'https://smart-home.page.gd/frontend/index.html'
//     },
//     {
//       title: 'AI-Powered Recycling Assistant',
//       tech: 'HTML, CSS, Javascript, API',
//       desc: 'Developed an eco-friendly application that helps users identify, sort, and recycle waste efficiently for a greener environment.',
//       image: recycleImg,
//       github: 'https://github.com/jay-prakash-kumar/Recycle-guide-/',
//       live: 'https://recycle-guide1.netlify.app/'
//     },
//     {
//       title: 'Smart Quiz Kids Learning App',
//       tech: 'HTML, Tailwind CSS, Javascript',
//       desc: 'An engaging quiz-based learning platform that helps students improve skills through structured questions and instant feedback.',
//       image: quizImg,
//       github: 'https://github.com/jay-prakash-kumar/quiz-learning-app',
//       live: 'https://jay-prakash-kumar.github.io/quiz-learning-app/'
//     }
//   ];

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="projects" className="section">
//       <div className="container">
//         <motion.h2 
//           variants={textVariant()}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="section-title"
//         >
//           Featured <span className="text-highlight">Projects</span>
//         </motion.h2>

//         <div style={{ position: "relative", marginTop: "3rem", padding: "0 1rem" }}>
//           {/* Left Arrow */}
//           <button
//             onClick={scrollLeft}
//             className="nav-arrows"
//             style={{
//               position: "absolute",
//               left: "-10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 10,
//               background: "rgba(15, 23, 42, 0.8)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: "50%",
//               width: "50px",
//               height: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               color: "var(--text-primary)",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
//               transition: "all 0.3s ease"
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "var(--accent-color)";
//               e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "rgba(15, 23, 42, 0.8)";
//               e.currentTarget.style.transform = "translateY(-50%) scale(1)";
//             }}
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <motion.div 
//             ref={scrollRef}
//             className="hide-scrollbar"
//             variants={staggerContainer(0.1, 0)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//             style={{
//               display: "flex",
//               gap: "2rem",
//               overflowX: "auto",
//               scrollSnapType: "x mandatory",
//               scrollBehavior: "smooth",
//               padding: "1rem 5px 3rem 5px", // Extra padding for box-shadows
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {projects.map((proj, index) => (
//               <motion.div 
//                 variants={fadeIn("right", "spring", index * 0.1, 0.85)}
//                 key={index} 
//                 className="card glass-effect project-card slider-card" 
//                 style={{ 
//                   flex: "0 0 auto",
//                   scrollSnapAlign: "center",
//                   padding: 0, 
//                   overflow: 'hidden', 
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   border: '1px solid rgba(255,255,255,0.08)',
//                   background: 'var(--nav-bg)',
//                   borderRadius: '24px',
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//                   transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
//                   cursor: "grab"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
//                   e.currentTarget.style.borderColor = "var(--accent-color)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
//                 }}
//               >

//                 {/* Image Container with Hover Overlay */}
//                 <div className="project-image-container" style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
//                   <img 
//                     src={proj.image} 
//                     alt={proj.title} 
//                     className="project-image"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }} 
//                   />

//                   {/* Hover Overlay */}
//                   <div className="project-overlay" style={{
//                     position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
//                     background: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     gap: '1.5rem', opacity: 0, transition: 'all 0.4s ease', backdropFilter: 'blur(5px)'
//                   }}>
//                     <a href={proj.github} target="_blank" rel="noreferrer" className="overlay-btn github-btn" title="View Source Code" style={{
//                       display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px',
//                       borderRadius: '50%', background: 'white', color: 'black', transition: 'all 0.3s ease', transform: 'translateY(20px)'
//                     }}>
//                       <Github size={24} />
//                     </a>
//                     <a href={proj.live} target="_blank" rel="noreferrer" className="overlay-btn live-btn" title="View Live Demo" style={{
//                       display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px',
//                       borderRadius: '50%', background: 'var(--accent-color)', color: 'white', transition: 'all 0.3s ease', transform: 'translateY(20px)',
//                       boxShadow: '0 4px 15px var(--accent-glow)'
//                     }}>
//                       <ExternalLink size={24} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Description Content */}
//                 <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//                   <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', fontWeight: '700', lineHeight: "1.3", color: "var(--text-primary)" }}>{proj.title}</h3>
//                   <p className="text-highlight" style={{ fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '600', letterSpacing: '0.5px' }}>{proj.tech}</p>
//                   <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.9rem' }}>{proj.desc}</p>

//                   {/* Persistent Links */}
//                   <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.2rem" }}>
//                     <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1, justifyContent: "center", display: "flex", gap: "0.5rem" }}>
//                       <Github size={16} /> Code
//                     </a>
//                     <a href={proj.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1, justifyContent: "center", display: "flex", gap: "0.5rem" }}>
//                       <ExternalLink size={16} /> Live
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Arrow */}
//           <button
//             onClick={scrollRight}
//             className="nav-arrows"
//             style={{
//               position: "absolute",
//               right: "-10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 10,
//               background: "rgba(15, 23, 42, 0.8)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: "50%",
//               width: "50px",
//               height: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               color: "var(--text-primary)",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
//               transition: "all 0.3s ease"
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "var(--accent-color)";
//               e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "rgba(15, 23, 42, 0.8)";
//               e.currentTarget.style.transform = "translateY(-50%) scale(1)";
//             }}
//           >
//             <ChevronRight size={24} />
//           </button>

//           <style dangerouslySetInnerHTML={{__html: `
//             .hide-scrollbar::-webkit-scrollbar {
//               display: none;
//             }
//             .slider-card {
//               min-width: calc(50% - 1.25rem);
//               max-width: calc(50% - 1.25rem);
//             }
//             @media (max-width: 768px) {
//               .slider-card {
//                 min-width: 85vw;
//                 max-width: 85vw;
//               }
//             }
//             .project-card:hover .project-image {
//               transform: scale(1.1) !important;
//             }
//             .project-card:hover .project-overlay {
//               opacity: 1 !important;
//             }
//             .project-card:hover .overlay-btn {
//               transform: translateY(0) !important;
//             }
//             .github-btn:hover {
//               background: #cbd5e1 !important;
//               transform: translateY(-5px) scale(1.05) !important;
//             }
//             .live-btn:hover {
//               transform: translateY(-5px) scale(1.05) !important;
//               boxShadow: 0 8px 25px var(--accent-glow) !important;
//             }
//           `}} />
//         </div>
//       </div>
//     </section>
//   );
// }


import { Github, ExternalLink } from 'lucide-react';
import smartImg from '../assets/smart.png';
import recycleImg from '../assets/recycle.png';
import trafficImg from '../assets/traffic.png';
import quizImg from '../assets/quiz.png';
export default function Projects() {
  const projects = [
    {
      title: 'Traffic Management System',
      tech: 'React, Node, Javascript, Tailwind CSS, MongoDB',
      desc: 'Developed an intelligent traffic control solution that detects vehicle number and detect accidents inform to traffic police and report the mishappenings.',
      image: trafficImg,
      github: 'https://github.com/jay-prakash-kumar/Traffic-Management',
      live: 'https://traffic-management-client.onrender.com/'
    },
    {
      title: 'Smart Home',
      tech: ' HTML, Tailwind CSS, JavaScript, PHP, PHP Mailer',
      desc: 'A centralized smart home platform enabling users to control devices, track energy usage, and receive intelligent notifications.',
      image: smartImg,
      github: 'https://github.com/jay-prakash-kumar/Smart_Home',
      live: 'https://smart-home.page.gd/frontend/index.html'
    },
    {
      title: 'AI-Powered Recycling Assistant',
      tech: 'HTML, CSS, Javascript, API',
      desc: 'Developed an eco-friendly application that helps users identify, sort, and recycle waste efficiently for a greener environment.',
      image: recycleImg,
      github: 'https://github.com/jay-prakash-kumar/Recycle-guide-/',
      live: 'https://recycle-guide1.netlify.app/'
    },
    {
      title: 'Smart Quiz Kids Learning App',
      tech: 'HTML. Tailwind CSS, Javascript',
      desc: 'An engaging quiz-based learning platform that helps students improve skills through structured questions and instant feedback.',
      image: quizImg,
      github: 'https://github.com/jay-prakash-kumar/quiz-learning-app',
      live: 'https://jay-prakash-kumar.github.io/quiz-learning-app/'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-highlight">Projects</span></h2>

        <div className="skills-grid">
          {projects.map((proj, index) => (
            <div key={index} className="card glass-effect project-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--glass-border)' }}>

              {/* Image Container with Hover Overlay */}
              <div className="project-image-container" style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }}
                />

                {/* Hover Overlay */}
                <div className="project-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '1.5rem', opacity: 0, transition: 'all 0.4s ease', backdropFilter: 'blur(5px)'
                }}>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="overlay-btn github-btn" title="View Source Code" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px',
                    borderRadius: '50%', background: 'white', color: 'black', transition: 'all 0.3s ease', transform: 'translateY(20px)'
                  }}>
                    <Github size={26} />
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="overlay-btn live-btn" title="View Live Demo" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px',
                    borderRadius: '50%', background: 'var(--accent-color)', color: 'white', transition: 'all 0.3s ease', transform: 'translateY(20px)',
                    boxShadow: '0 4px 15px var(--accent-glow)'
                  }}>
                    <ExternalLink size={26} />
                  </a>
                </div>
              </div>

              {/* Description Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'var(--nav-bg)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>{proj.title}</h3>
                <p className="text-highlight" style={{ fontSize: '0.9rem', marginBottom: '1.2rem', fontWeight: '600', letterSpacing: '0.5px' }}>{proj.tech}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{proj.desc}</p>

                {/* Persistent Links */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    <Github size={16} /> Code
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .project-card:hover .project-image {
            transform: scale(1.1);
          }
          .project-card:hover .project-overlay {
            opacity: 1;
          }
          .project-card:hover .overlay-btn {
            transform: translateY(0) !important;
          }
          .github-btn:hover {
            background: #cbd5e1 !important;
            transform: translateY(-5px) scale(1.05) !important;
          }
          .live-btn:hover {
            transform: translateY(-5px) scale(1.05) !important;
            boxShadow: 0 8px 25px var(--accent-glow) !important;
          }
        `}} />
      </div>
    </section>
  );
}
