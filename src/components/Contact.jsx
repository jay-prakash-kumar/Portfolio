import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          Get In <span className="text-highlight">Touch</span>
        </motion.h2>
        
        <motion.div 
          className="contact-grid"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 0.5)} className="contact-info glass-effect" style={{ padding: '2.5rem' }}>
            <h3>Let's Connect</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm always open to discuss product design work, new projects, creative ideas and
              opportunities to be part of your visions.
            </p>
            
            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <h4>Email Me</h4>
                <a href="mailto:jayprakash@example.com">kumarjp457@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <h4>Call Me</h4>
                <a href="tel:+1234567890">+91 9142700467</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Patna, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/jay-prakash-kumar" className="social-link"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/jay-prakashkumar/" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("left", "tween", 0.4, 0.5)} className="contact-form glass-effect">
             <h3>Send Me a Message</h3>
             <form onSubmit={(e) => e.preventDefault()}>
               <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                 <input type="text" className="form-control" placeholder="Your Name" required />
               </div>
               <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                 <input type="email" className="form-control" placeholder="Your Email" required />
               </div>
               <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                 <textarea className="form-control" placeholder="Your Message" required></textarea>
               </div>
               <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                 Send Message
               </button>
             </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
