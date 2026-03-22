import { ExternalLink } from "lucide-react";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';

export default function Training() {
  return (
    <section id="training" className="section">
      <div className="container">
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          My <span className="text-highlight">Training</span>
        </motion.h2>
        
        <motion.div 
          className="timeline"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-effect">
              <span className="timeline-date">Jun 2025 - July 2025</span>
              <h3>Fundamentals of Data Structures: Learn, Apply and Build</h3>
              <h4>Lovely Professional University</h4>
              
              <ul style={{ listStyleType: "none", padding: 0, margin: "1rem 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent-color)" }}>•</span>
                  <span>Developed a functional GUI-based "Smart Quiz" application using Java Swing.</span>
                </li>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent-color)" }}>•</span>
                  <span>Applied core data structures (arrays, stacks, queues, hash maps) to optimize application logic and ensure fast access operations.</span>
                </li>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent-color)" }}>•</span>
                  <span>Strengthened problem-solving skills by building an intuitive user experience powered by clean code and efficient data organization.</span>
                </li>
              </ul>
              
              <p style={{ margin: "1rem 0", lineHeight: "1.5" }}>
                <strong>Tech:</strong> Java, HTML, CSS, JavaScript, C++
              </p>
              
              <a 
                href="https://drive.google.com/file/d/1bW9-_x36cqyQZVgrlslpeJO0P-_cXDHg/view" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                  padding: "0.6rem 1.2rem",
                  background: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
  
        </motion.div>
      </div>
    </section>
  );
}
