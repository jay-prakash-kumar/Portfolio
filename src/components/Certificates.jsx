import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion.js';
import orcImg from "../assets/oracle.png";
import nImg from "../assets/nptel.png";
import fImg from "../assets/fcc.png";
import hImg from "../assets/hackerrank.png";

export default function Certificates() {
  const certs = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundation",
      issuer: "Oracle",
      date: "2026",
      image: orcImg,
      link: "https://drive.google.com/file/d/1ckawzoEuvQyXknN80AFFYmO6AnFT1ucx/view",
    },
    {
      title: "NPTEL Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      image: nImg,
      link: "https://drive.google.com/file/d/1Jdttg9N4uOPA-O5rqSFdQ5uC_UOc34lM/view",
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "2025",
      image: hImg,
      link: "https://www.hackerrank.com/certificates/799ffee31aaf",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: fImg,
      link: "https://www.freecodecamp.org/certification/fcc9c644a91-6822-4046-b812-f95ddbd67b10/responsive-web-design",
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-title"
        >
          My <span className="text-highlight">Certificates</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            marginTop: "3rem"
          }}
        >
          {certs.map((cert, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.1, 0.85)}
              key={index}
              className="card glass-effect"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "var(--nav-bg)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                e.currentTarget.style.borderColor = "var(--accent-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Image Showcase Container */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  position: "relative",
                  overflow: "hidden",
                  background: "#0f172a",
                  borderBottom: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                    opacity: 0.9,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* Subtle overlay gradient */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0, 
                  height: "50%",
                  background: "linear-gradient(to top, rgba(15,23,42,1), transparent)",
                  pointerEvents: "none"
                }}></div>
              </div>

              {/* Text Bottom Section */}
              <div
                style={{
                  padding: "1.8rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem", color: "var(--accent-color)" }}>
                  <Award size={18} />
                  <span style={{ fontSize: "0.85rem", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>{cert.issuer}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    margin: "0 0 1rem 0",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    color: "var(--text-primary)"
                  }}
                >
                  {cert.title}
                </h3>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    <Calendar size={16} />
                    {cert.date}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      transition: "all 0.3s ease",
                      background: "rgba(255,255,255,0.05)",
                      padding: "0.5rem 1rem",
                      borderRadius: "50px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-color)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    View <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
