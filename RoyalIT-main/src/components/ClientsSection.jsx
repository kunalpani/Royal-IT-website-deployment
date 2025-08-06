import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const clients = [
  { img: "/GAMER SQUAD(3).svg", alt: "Gamer Squad" },
  { img: "/SERVICES ON HOME (1).svg", alt: "Zhyper" },
  { img: "/SERVICES ON HOME (4).svg", alt: "Services" },
  { img: "/LAHARI ART GALLERY.svg", alt: "Lahari Art" },
  { img: "/RC.svg", alt: "RC" },
  { img: "/FASIONS INFRA.svg", alt: "Fashions Infra" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ClientsSection() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="pt-5 position-relative overflow-hidden"
        style={{
          minHeight: "500px",
          fontFamily: "'Unbounded', sans-serif",
        }}
      >
        {/* Background pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{ opacity: 0.05 }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="clientsPattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#clientsPattern)" />
          </svg>
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Title */}
          <motion.h2
            className="text-center mb-5"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 200,
              textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
              letterSpacing: "1px",
              padding: "0 1rem",
              fontFamily: "'Unbounded', sans-serif",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Clients we serve
          </motion.h2>

          {/* Clients Grid */}
          <motion.div
            className="row justify-content-center align-items-center g-4 mb-5 px-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              gap: "20px 0",
            }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="col-6 col-sm-5 col-md-3 col-lg-2 d-flex justify-content-center"
                variants={itemVariants}
              >
                <motion.div
                  className="d-flex align-items-center justify-content-center position-relative text-center"
                  style={{
                    width: "clamp(150px, 18vw, 180px)",
                    height: "clamp(110px, 13vw, 130px)",
                    background: "#000",
                    borderRadius: 12,
                    border: "0",
                    cursor: "pointer",
                    padding: "0.8rem",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: `0 8px 25px rgba(255, 255, 255, 0.15)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={client.img}
                    alt={client.alt}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "90px",
                      objectFit: "contain",
                      filter: "grayscale(100%) brightness(0.9)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.filter = "none";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.filter =
                        "grayscale(100%) brightness(0.9)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Button Section */}
      <motion.div
        className="text-center position-relative d-flex flex-column align-items-center pb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Semi-circle Glow */}
        <div
          style={{
            width: "clamp(180px, 50vw, 220px)",
            height: "clamp(80px, 25vw, 100px)",
            background:
              "radial-gradient(circle at center, rgba(106,90,205,0.5), transparent 70%)",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            filter: "blur(25px)",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        {/* Button */}
        <motion.button
          style={{
            padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 32px)",
            background: "linear-gradient(90deg, #3f88f5, #6a5acd)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            fontWeight: 300,
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(106, 90, 205, 0.4)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            zIndex: 1,
            fontFamily: "'Unbounded', sans-serif",
          }}
          whileHover={{
            transform: "translateY(-3px)",
            boxShadow: "0 7px 20px rgba(106, 90, 205, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
        >
          Explore Our Work
        </motion.button>
      </motion.div>
    </>
  );
}
