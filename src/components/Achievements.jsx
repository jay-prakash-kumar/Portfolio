import { Trophy, Star, Target, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';

export default function Achievements() {
  const achievements = [
    {
      title: 'Leetcode Consistency',
      year: '2026',
      desc: 'Tackled 150+ DSA problems, demonstrating problem-solving dedication and daily consistency',
      icon: <Star size={28} className="text-highlight" />
    },
    // { 
    //   title: 'Open Source Contributer', 
    //   year: '2026',
    //   desc: 'Developing new scalable solutions daily commiting my contributions to github', 
    //   icon: <Target size={28} className="text-highlight" /> 
    // },
    {
      title: '5-Star in Hackerrank ',
      year: '2025',
      desc: ' Earned 5-star in hackerRank demonstrating my commands and strong fundamentals in C langugage',
      icon: <Trophy size={28} className="text-highlight" />
    },
    {
      title: 'CodeChef ',
      year: 'Since 2026',
      desc: 'Attained 2★ rating showcasing consistency in competitive programming contests',
      icon: <Code size={28} className="text-highlight" />
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          Key <span className="text-highlight">Achievements</span>
        </motion.h2>

        <motion.div
          className="skills-grid" style={{ marginBottom: '2rem' }}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((ach, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              key={index}
              className="glass-effect achievement-card"
              style={{
                background: 'var(--nav-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.15)';
                e.currentTarget.style.borderColor = 'var(--accent-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              {/* Left Side: Icon Container */}
              <div style={{
                width: '75px',
                height: '75px',
                borderRadius: '16px',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'inset 0 0 20px rgba(239, 68, 68, 0.05)'
              }}>
                {ach.icon}
              </div>

              {/* Right Side: Content Container */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                    {ach.title}
                  </h3>
                  {/* Subtle Dark Year Badge */}
                  <span style={{
                    background: 'var(--input-bg)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {ach.year}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
