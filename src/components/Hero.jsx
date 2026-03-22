import { ArrowRight, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion.js";
import resume from "../assets/resume.pdf";
import profilePic from "../assets/pic1.jpg";

export default function Hero() {
  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="hero-text-content">
            <h2>Hello, I'm</h2>
            <h1 className="gradient-text">Jay Prakash Kumar</h1>
            <h3 className="hero-subtitle">
              <span style={{ color: "var(--text-secondary)", fontWeight: "500" }}>
                <Typewriter
                  words={["UI/UX Designer", "Full Stack Developer", "Software Tester"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <p className="hero-desc">
              Passionate about creating seamless digital experiences by combining
              clean design, efficient code, and thorough testing. I design
              intuitive interfaces, develop scalable applications, and ensure
              high-quality, bug-free products.
            </p>
            <h2 className="gradient-text tagline text-2xl" style={{ marginBottom: '2rem' }}>Pixels.Code.Passion</h2>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                HIRE ME <ArrowRight size={18} />
              </a>
              <a href={resume} download="Jay_resume.pdf" className="btn btn-primary">
                RESUME <Download size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)} className="hero-image-wrapper">
            <img src={profilePic} alt="Jay Prakash Kumar" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
