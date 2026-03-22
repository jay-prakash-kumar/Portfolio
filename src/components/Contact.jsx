import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';
import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // IMPORTANT: Get your access key from https://web3forms.com/ and put it here
    formData.append("access_key", "b7613fa3-f47b-4ce4-9dab-434f50afc8f8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    }
  };

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
              {/* <a href="#" className="social-link"><Twitter size={20} /></a> */}
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.4, 0.5)} className="contact-form glass-effect">
            <h3>Send Me a Message</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
            <span style={{ display: 'block', marginTop: '1rem', color: 'var(--text-secondary)' }}>{result}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
