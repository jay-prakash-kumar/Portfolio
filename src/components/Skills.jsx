import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';

const categories = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "PHP", "C"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind", "Figma"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "MongoDB", "Express", "Laravel"],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Leadership", "Adaptability"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        
        {/* Header */}
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          style={{ marginBottom: "3rem", paddingLeft: "0.5rem" }}
        >
          <h2 className="section-title" style={{ marginBottom: "1.5rem", alignSelf: "flex-start", textAlign: "left", marginInline: "0" }}>
            My <span className="text-highlight">Skills</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "600px" }}>
            A structured overview of my technical capabilities and soft skills.
          </p>
        </motion.div>

        {/* 4-Col Grid replacing the tailwind layout */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="tail-grid"
        >
          {categories.map((cat, i) => (
            <motion.div
              variants={fadeIn("up", "spring", i * 0.1, 0.75)}
              key={i}
              className="glass-effect card"
              style={{
                background: "var(--nav-bg)", 
                border: "1px solid var(--glass-border)", 
                borderRadius: "1rem", 
                padding: "1.5rem", 
                transition: "all 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 40px var(--accent-glow)"; 
                e.currentTarget.style.borderColor = "var(--accent-color)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--glass-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h2 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "var(--accent-color)" }}>
                {cat.title}
              </h2>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--input-bg)", 
                      color: "var(--text-primary)", 
                      border: "1px solid var(--text-secondary)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px", 
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-color)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "var(--accent-color)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--input-bg)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.borderColor = "var(--text-secondary)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsive CSS Grid matching Tailwind's internal grid system */}
        <style dangerouslySetInnerHTML={{__html: `
          .tail-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          
          /* lg:grid-cols-4 drops down to md:grid-cols-2 */
          @media (max-width: 1024px) {
            .tail-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* mobile drops down to 1 col */
          @media (max-width: 640px) {
            .tail-grid {
              grid-template-columns: 1fr;
            }
          }
        `}} />
      </div>
    </section>
  );
}
