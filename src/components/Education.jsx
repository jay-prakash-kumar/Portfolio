import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          My <span className="text-highlight">Education</span>
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
              <span className="timeline-date">2023 - Present </span>
              <h3>Bachelor of Technology in Computer Science and Engineering</h3>
              <h4>Lovely Professional University, Punjab</h4>
              <p>Specialized in modern web technologies, proficient in UI/UX and developing scalable systems.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-effect">
              <span className="timeline-date">2022 - 2023</span>
              <h3>JEE Advanced Prep</h3>
              <h4>Resonance Institute, Kota</h4>
              <p>Focused on Mathematics, Physics, and Chemistry.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-effect">
              <span className="timeline-date">2020 - 2022</span>
              <h3>Higher Secondary Education</h3>
              <h4>Dr. D Y Patil Pushapalata Patil International School, Patna</h4>
              <p>Focused on Mathematics, Physics, and Computer Science. Secured 78% in CBSE Boards.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
