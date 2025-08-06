import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const techs = [
  { name: 'JavaScript', icon: 'bi-code-slash', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'bi-file-code', color: '#3178C6' },
  { name: 'Python', icon: 'bi-code', color: '#3776AB' },
  { name: 'Java', icon: 'bi-cup-hot', color: '#007396' },
  { name: 'C++', icon: 'bi-terminal', color: '#00599C' },
  { name: 'GoLang', icon: 'bi-lightning', color: '#00ADD8' },

  { name: 'HTML5', icon: 'bi-filetype-html', color: '#E34F26' },
  { name: 'CSS3', icon: 'bi-filetype-css', color: '#1572B6' },
  { name: 'Sass', icon: 'bi-droplet-half', color: '#CC6699' },
  { name: 'Bootstrap', icon: 'bi-bootstrap', color: '#7952B3' },
  { name: 'Tailwind CSS', icon: 'bi-wind', color: '#38B2AC' },

  { name: 'React', icon: 'bi-arrow-repeat', color: '#61DAFB' },
  { name: 'Next.js', icon: 'bi-lightning-charge-fill', color: '#000000' },
  { name: 'Vue.js', icon: 'bi-eye', color: '#42B883' },
  { name: 'Angular', icon: 'bi-diagram-3-fill', color: '#DD0031' },

  { name: 'Node.js', icon: 'bi-server', color: '#339933' },
  { name: 'Express.js', icon: 'bi-diagram-2', color: '#000000' },
  { name: 'MongoDB', icon: 'bi-database-fill', color: '#47A248' },
  { name: 'MySQL', icon: 'bi-database', color: '#4479A4' },
  { name: 'PostgreSQL', icon: 'bi-database-fill', color: '#336791' },

  { name: 'Redis', icon: 'bi-hdd-network', color: '#DC382D' },
  { name: 'Firebase', icon: 'bi-fire', color: '#FFCA28' },
  { name: 'AWS', icon: 'bi-cloud-fill', color: '#FF9900' },
  { name: 'Wordpress', icon: 'bi-wordpress', color: '#0078D4' },

  { name: 'GitHub', icon: 'bi-github', color: '#181717' },
  { name: 'Figma', icon: 'bi-palette', color: '#F24E1E' }
];

const ROW_SIZE = 13;
const rows = [
  techs.slice(0, ROW_SIZE),
  techs.slice(ROW_SIZE, ROW_SIZE * 2),
  techs.slice(ROW_SIZE * 2)
].filter(row => row.length > 0);

function InfiniteRow({ children, direction = "right", speed = 20 }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      const row = rowRef.current;
      row.style.setProperty("--row-width", `${row.scrollWidth}px`);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Left gradient mask */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "6%",
          zIndex: 2,
          background: "linear-gradient(to right, #0c0118 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Right gradient mask */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "6%",
          zIndex: 2,
          background: "linear-gradient(to left, #0c0118 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Scrolling content */}
      <motion.div
        ref={rowRef}
        style={{
          display: "flex",
          width: "fit-content",
          willChange: "transform",
        }}
        animate={{
          x: direction === "right" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear"
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "clamp(12px, 2vw, 24px)",
              minWidth: "fit-content",
              paddingRight: "clamp(12px, 2vw, 24px)"
            }}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechGrid() {
  return (
    <div style={{ 
      maxWidth: "100%", 
      width: "100vw",
      padding: "0 clamp(1rem, 5vw, 3rem)",
      overflow: "hidden",
      fontFamily: "'Readex Pro', sans-serif",
      
    }}>
      <h3
        style={{
          fontWeight: 300,
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          lineHeight: 1.1,
          textAlign: "center",
          marginBottom: "clamp(1rem, 3vw, 2rem)",
          padding: "0 clamp(1rem, 5vw, 3rem)"
        }}
      >
        <span
          style={{
            display: "block",
            background: "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            padding:"3px",
          }}
        >
        Working Across 30+
        </span>
        <span
          style={{
            display: "block",
            background: "linear-gradient(140deg, #ff9b26, #ee4f27)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 300,
            marginTop: "clamp(4px, 1vw, 8px)",
            marginBottom: "clamp(1.5rem, 4vw, 3rem)",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            padding:"3px",
          }}
        >
          Modern Tech Stacks
        </span>
      </h3>

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "clamp(20px, 3vw, 40px)",
        width: "100%",
      }}>
        {rows.map((row, i) => (
          <InfiniteRow
            key={i}
            direction={i % 2 === 0 ? "right" : "left"}
            speed={20 + (i * 2)}
          >
            {row.map((tech, idx) => (
              <div
                key={tech.name + idx}
                style={{
                  width: "clamp(70px, 10vw, 90px)",
                  height: "clamp(70px, 10vw, 90px)",
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className={`bi ${tech.icon}`} style={{ 
                  fontSize: "clamp(24px, 3vw, 28px)", 
                  color: tech.color, 
                  marginBottom: "4px" 
                }}></i>
                <span className="fw-semibold" style={{ 
                  fontSize: "clamp(8px, 1vw, 10px)", 
                  color: "black", 
                  fontWeight: 100 
                }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </InfiniteRow>
        ))}
      </div>
    </div>
  );
}
