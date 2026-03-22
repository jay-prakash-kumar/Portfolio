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
            <h3>Turning Complex Ideas into Effortless Experiences</h3>
            <p style={{ textAlign: "justify", lineHeight: "1.8", margin: "0 auto 1.5rem auto" }}>
              I am a Full Stack Engineer and UI/UX Designer pursuing my B.Tech in Computer Science and Engineering. I focus on bridging the gap between beautiful, intuitive design and strong backend architecture to build amazing products.
            </p>
            <p style={{ textAlign: "justify", lineHeight: "1.8", margin: "0 auto 2rem auto" }}>
              My approach is straightforward: I build clean, user-friendly interfaces powered by modern technologies like the MERN stack. From designing smooth web applications to writing efficient code, my ultimate goal is to deliver seamless digital experiences that users genuinely enjoy—from the front-end visuals all the way down to the database.
            </p>

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