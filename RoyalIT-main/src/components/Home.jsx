import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import TechGrid from './TechGrid';
import ClientsSection from './ClientsSection';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();

  // Animation variants for sections
  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div style={{ 
      background: "#000", 
      minHeight: "100vh", 
      color: "#fff", 
      fontFamily: "'Readex Pro', sans-serif", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
      {/* Readex Pro Font */}
      <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />

      <Header />

      {/* Enhanced Hero Section */}
      <motion.section 
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
  style={{ 
    marginTop: "55px", // Removed top margin on mobile
    minHeight: "45vh", // Reduced height for mobile
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: 'relative',
    '@media (max-width: 768px)': {
      minHeight: "30vh", // Even smaller on mobile
      marginTop: "0px",
      marginBottom: "0"
    }
  }}
>
  <motion.div 
    variants={cardVariants}
    style={{
      width: '100%',
      maxWidth: '1400px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      '@media (max-width: 768px)': {
        height: '40vh' // Constrained container height
      }
    }}
  >
    <div className='video-wrapper' style={{
      width: '100%',
      paddingTop: '46.25%',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        paddingTop: '0', // Remove aspect ratio constraint
        height: '100%' // Fill parent container
      }
    }}>
      <video
        src="/videos/intro.mp4/Recording 2025-07-04 154816.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        style={{
          position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)'
  }}
/>
    </div>
  </motion.div>
</motion.section>

<motion.section
initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
   className="container-fluid px-0 py-5" style={{ background: "black", position: "relative" }}>
  <div className="row justify-content-center align-items-center position-relative px-3 ">
    
    {/* Text Box - Left Side Floating */}
    <motion.div className="col-lg-6 col-md-10 position-absolute" style={{
      top: "44%",
      left: "3%",
      transform: "translateY(-50%)",
      zIndex: 2
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1e1e1e, #3a3a3a)",
        padding: "2.5rem",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 15px 25px rgba(0,0,0,0.5)",
        maxWidth: "550px",
        maxHeight: "470px"
      }}>
        <h2 style={{
          fontSize: "2 rem",
          fontWeight: 600,
          lineHeight: 1.3,
          color: "#ffffff",
          fontFamily: "'Readex Pro', sans-serif",
          marginBottom: "1.5rem",
          background: "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          The Royal IT Services
        </h2>

        <p style={{
          fontSize: "0.9 rem",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.85)",
          marginBottom: "1.25rem",
          fontFamily: "'Readex Pro', sans-serif"
        }}>
          Along with the latest infrastructure, tech stacks, management processes, 
          and security measures gained from a diverse collective portfolio of 
          seasoned strategists, designers, and developers in 35+ prominent 
          industries.
           This helps us fulfil any client demand without compromising the output 
          quality, quicker than the industry-best delivery timelines.
        </p>
        
      </div>
    </motion.div>

    {/* Image - Right Side */}
    <motion.div className="col-lg-8 offset-lg-4 col-md-10 offset-md-2">
      <motion.div style={{
        borderRadius: "24px",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        minHeight: "500px",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
      }}>
        <img 
          src="/homee.avif" // Replace with your image
          alt="Royal IT Services"
          className="img-fluid "
          style={{
            width: "750px",
            height: "440px",
            objectFit: "cover",
            borderRadius: "24px",
            filter: "brightness(0.7)"
          }}
        />
      </motion.div>
    </motion.div>
  </div>
</motion.section>



      {/* Enhanced Integrations Grid Section */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-5 position-relative" 
        style={{ background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)" }}
      >
        <motion.div variants={cardVariants}>
          <TechGrid/>
        </motion.div>
      </motion.section>

      {/* Clients Section */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="container my-5 text-center position-relative"
        style={{ zIndex: 1, }}
      >
        <motion.div variants={cardVariants}>
          <ClientsSection/>
        </motion.div>
      </motion.div>

      {/* Welcome Section */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-5  position-relative" 
        
      >
        {/* <div className="container text-center position-relative" style={{ zIndex: 1,  marginTop: "2rem" }}>
          <motion.h2 
  className="display-4 mb-4"
  style={{ 
    display: "inline-block",
    background: "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 0 40px rgba(160, 132, 232, 0.3)", // slightly softened
    fontWeight: 200
  }}
  variants={cardVariants}
>
  Welcome to Intelligent IT Engineering
</motion.h2>

        </div> */}
      </motion.section>

      {/* Stats Section - Responsive */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        style={{ position: 'relative', overflow: 'hidden', margin: '4rem 0' }}
      >
        <video
          src="/videos/intro.mp4/delivery image.mp4"
          autoPlay
          muted
          loop
          className="img-fluid rounded"
          style={{ 
            maxWidth: '1400px', 
            display: 'block', 
            width: '100%', 
            height: 'auto' 
          }}
        />
        
        {/* Container for all stats */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem'
        }}>
          {/* Top Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            {/* Client Served */}
            <motion.div 
              style={{
                textAlign: 'center',
                width: '30%',
                maxWidth: '300px'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 style={{ 
                fontWeight: 200,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'linear-gradient(90deg, #4cc9f0, #a084e8, #f72585)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                Client Served
              </h3>
              <p style={{ 
                fontWeight: 100,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'white',
                margin: 0,
                textAlign: 'center'
              }}>
                100+
              </p>
            </motion.div>
            
            {/* UpTime Delivery */}
            <motion.div 
              style={{
                textAlign: 'center',
                width: '30%',
                maxWidth: '300px'
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 style={{ 
                fontWeight: 200,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'linear-gradient(90deg, #f72585, #4cc9f0, #a084e8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                UpTime Delivery
              </h3>
              <p style={{ 
                fontWeight: 100,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'white',
                margin: 0,
                textAlign: 'center'
              }}>
                99.98%
              </p>
            </motion.div>
          </div>
          
          {/* Center Users */}
          <motion.div 
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              width: '30%',
              maxWidth: '300px'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ 
              fontWeight: 200,
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              background: 'linear-gradient(90deg, #a084e8, #f72585, #4cc9f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem'
            }}>
              Users
            </h3>
            <p style={{ 
              fontWeight: 100,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: 'white',
              margin: 0,
              textAlign: 'center'
            }}>
              1000+
            </p>
          </motion.div>
          
          {/* Empty div to balance the flex layout */}
          <div style={{ height: '60px' }}></div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;