import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          About <span className="text-highlight">Me</span>
        </motion.h2>

        <motion.div 
          className="about-grid"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="about-text">
            <h3>Turning Complex Workflows into Effortless Experiences</h3>
            <p>As a Full Stack Engineer and UI/UX Designer pursuing my B.Tech in Computer Science and Engineering, I specialize in bridging the gap between intuitive design and robust backend architecture & building products.</p>
            <p> My approach combines a deep understanding of visual psychology—leveraging Gestalt laws to craft clean, user-centric interfaces—with the technical execution of the MERN stack. Whether I'm conducting competitive UI evaluations for educational platforms or architecting responsive web applications, I focus on delivering seamless digital experiences from the database to the DOM.</p>

            <motion.div variants={staggerContainer(0.2, 0.5)} className="about-stats">
              <motion.div variants={fadeIn("up", "tween", 0, 0.5)} className="stat-item">
                <h4>7.8</h4>
                <p>CGPA</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0, 0.5)} className="stat-item">
                <h4>4+</h4>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0, 0.5)} className="stat-item">
                <h4>150+</h4>
                <p>Active Coding Days</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}