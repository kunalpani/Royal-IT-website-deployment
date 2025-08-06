import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Font injection component
const FontInjector = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@100;200;300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

// Utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Badge Component
const Badge = ({ className, variant = "default", children, ...props }) => {
  const baseClasses = "d-inline-flex align-items-center px-2 py-1 rounded";
  const variantClasses = {
    default: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    success: "bg-success text-white",
    outline: "border border-primary text-primary bg-transparent"
  };
  
  return (
    <span 
      className={cn(baseClasses, variantClasses[variant], className)} 
      style={{ 
        fontSize: '12px',
        fontFamily: "'Readex Pro', sans-serif",
        fontWeight: 600
      }} 
      {...props}
    >
      {children}
    </span>
  );
};

// Button Component
const Button = ({ className, variant = "primary", size = "default", children, ...props }) => {
  const baseClasses = "btn d-inline-flex align-items-center justify-content-center";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline-light",
    ghost: "btn-link text-decoration-none text-white"
  };
  const sizeClasses = {
    default: "",
    sm: "btn-sm",
    lg: "btn-lg"
  };
  
  return (
    <button 
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} 
      style={{
        fontFamily: "'Readex Pro', sans-serif",
        fontWeight: 500
      }} 
      {...props}
    >
      {children}
    </button>
  );
};



const featureTabs = [
  {
    id: "design",
    title: "Design Smarter, Develop Freely",
    description: "Combine the ease of visual design with the power of custom code to create anything you imagine",
    icon: <i className="fas fa-paint-brush"></i>,
    headline: "Design Without Limitations",
    mainDescription: "Our platform gives you complete creative freedom to build exactly what you envision, without technical constraints holding you back.",
    cardText: "Pixel-perfect designs meet flawless functionality"
  },
  {
    id: "interactions",
    title: "Design with Motion in Mind",
    description: "Easily create smooth, sophisticated interactions that add depth and personality to every element",
    icon: <i className="fas fa-magic"></i>,
    headline: "Bring Your Designs to Life",
    mainDescription: "Create immersive experiences with animations and micro-interactions that delight users and enhance usability.",
    cardText: "Interactive experiences that engage and convert"
  },
  {
    id: "brand",
    title: "Brand Integrity at Every Touchpoint",
    description: "Ensure every site stays visually aligned with your brand using structured design systems.",
    icon: <i className="fas fa-palette"></i>,
    headline: "Consistent Brand Experiences",
    mainDescription: "Maintain perfect brand consistency across all digital properties with our design system tools.",
    cardText: "On-brand experiences at every interaction"
  },
  {
    id: "ai",
    title: "AI-Powered Design Efficiency",
    description: "Enhance productivity with AI that helps you write, align, and build—faster than ever.",
    icon: <i className="fas fa-robot"></i>,
    headline: "Smart Design Assistance",
    mainDescription: "Our AI tools accelerate your workflow by automating repetitive tasks and suggesting optimizations.",
    cardText: "Work smarter with intelligent automation"
  }
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" }
];

// Main About Component 
const About = () => {
  const [activeTab, setActiveTab] = useState("design");
  const navigate = useNavigate();

    // Initialize AOS animations
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }, []);



  return (
    <>
      <FontInjector />
      
      <div 
        className="text-white min-vh-100" 
        style={{ 
          backgroundColor: "#000000", 
          overflowX: "hidden",
          fontFamily: "'Readex Pro', sans-serif"
        }}
      >
        <Header />

        {/* Hero Section */}
        <section 
          className="px-lg-5 px-md-4 px-3 py-5 position-relative" 
          style={{ 
            marginTop: "90px",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden"
          }}
        >
          {/* Gradient Background */}
          <div 
            className="position-absolute top-0 end-0 w-50 h-100" 
            style={{
              background: "linear-gradient(135deg, rgba(107,33,245,0.15) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 0
            }}
          />
          
          {/* Animated Particles Background */}
          <div 
            className="position-absolute w-100 h-100" 
            style={{
              background: "radial-gradient(circle at 70% 30%, rgba(107,33,245,0.05) 0%, transparent 50%)",
              zIndex: 0
            }}
          />
          
          <div className="container-fluid position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center">
              {/* Left Column - About Content */}
              <div className="col-lg-5 col-md-6 mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  <div className="d-flex align-items-center mb-4" data-aos="fade-right">
                    <span 
  className="text-primary me-3" 
  style={{
    fontSize: "2.5rem",
    fontWeight: 700,
    fontFamily: "'Readex Pro', sans-serif",
    color: "#A1BFFF" // Add this line with your desired color
  }}
>
  //
</span>
                    <h1 
                      className="text-white mb-0" 
                      style={{
                        fontSize: "3rem",
                        fontWeight: 300,
                        fontFamily: "'Readex Pro', sans-serif",
                        letterSpacing: "-1.5px",
                        background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      ABOUT US
                    </h1>
                  </div>
                  
                  <div 
                    className="border-start border-primary border-3 ps-4 mb-5" 
                    style={{ height: "80px" }} 
                    data-aos="fade-right"
                  >
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: "1.5rem",
                        lineHeight: "1.6",
                        fontFamily: "'Readex Pro', sans-serif",
                        fontWeight: 200,
                        fontStyle: "italic",
                        letterSpacing: "0.5px"
                      }}
                    >
                      "Empowering Your Business Through Smart Software"
                    </p>
                  </div>
                  
                  <p 
                    className="text-light mb-4" 
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      fontWeight: 100,
                      fontFamily: "'Readex Pro', sans-serif"
                    }} 
                    data-aos="fade-right"
                  >
                    Innovative software that scales your vision and fuels business success.
                  </p>
                  
                  <div className="d-flex gap-3" data-aos="fade-up">
  <Link to="/Services">
    <button 
      className="btn btn-primary px-4 py-3 rounded-3" 
      style={{
        letterSpacing: "1px",
        fontWeight: 300,
        transition: "all 0.3s ease",
        fontFamily: "'Readex Pro', sans-serif"
      }}
    >
      Tailored Digital Solutions →
    </button>
  </Link>

</div>

                </div>
              </div>

              {/* Right Column - Featured Image */}
              <div className="col-lg-7 col-md-6" data-aos="fade-left">
                <div 
                  className="position-relative" 
                  style={{
                    height: "500px",
                    boxShadow: "0 25px 50px -12px rgba(107, 33, 245, 0.25)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transform: "perspective(1000px) rotateY(-5deg)",
                    transition: "transform 0.5s ease"
                  }}
                >
                 <img 
  src="/videos/intro.mp4/about us 1.jpg" 
  alt="Digital technology solutions" 
  className="w-100 h-100 object-cover" 
  style={{ objectPosition: "bottom top", objectFit: "cover", // Ensures the image covers the area without stretching
    width: "100%", 
    height: "100%" }} 
/>

                  <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 p-4 w-100">
                    <p 
                      className="text-white mb-0 text-uppercase" 
                      style={{ 
                        letterSpacing: "2px",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        fontFamily: "'Readex Pro', sans-serif"
                      }}
                    >
                      ROYAL IT SERVICES — SINCE 2012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
<section 
  className="container-fluid px-lg-5 px-md-4 px-5 py-4" 
  data-aos="fade-up" 
  style={{ background: "#111111" }}
>
  <div className="row justify-content-center">
    {stats.map((stat, index) => (
      <div 
        key={index} 
        className="col-sm-6 col-md-4 col-lg-3 col-12 mb-1" // Responsive column classes
        style={{ 
          padding: '0 3px' 
        }}
      >
        <div 
          style={{ 
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
            boxShadow: "0 5px 6px rgba(0,0,0,0.1)",
            height: '100%' // Ensures equal height
          }}
        >
          <div className="text-center p-3 p-sm-4"> {/* Responsive padding */}
            <h2 
              className="mb-2" 
              style={{ 
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // Responsive font size
                fontWeight: 200,
                fontFamily: "'Readex Pro', sans-serif",
                color: "#A1BFFF"
              }}
            >
              {stat.value}
            </h2>
            <p 
              className="mb-0" 
              style={{ 
                fontSize: "clamp(1rem, 3vw, 1.2rem)", // Responsive font size
                letterSpacing: "1px",
                fontWeight: 300,
                fontFamily: "'Readex Pro', sans-serif",
                background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              {stat.label}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        
        {/* Core Values Section */}
         <section className="container-fluid px-lg-5 px-md-4 px-3 py-5">
          <div className="row g-4" style={{ marginTop: "40px" }}>
            <div className="col-12 mb-5 text-center" data-aos="fade-up">
              <h2 
                className="mb-4 display-5" 
                style={{
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif",
                  background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                What Makes Us Different
              </h2>
            </div>
            
            {/* Column 1 */}
            <div className="col-md-6" data-aos="fade-right">
              <div 
                className="d-flex align-items-start gap-4 h-100 p-4" 
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <div 
                  className="bg-primary text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    fontSize: "1.5rem",
                    fontFamily: "'Readex Pro', sans-serif",
                    fontWeight: 400
                  }}
                >
                  01
                </div>
                <div className="flex-grow-1">
                  <h4 
                    className="mb-3" 
                    style={{
                      fontWeight: 300,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}
                  >
                    Pioneering Digital Excellence
                  </h4>
                  <p 
                    className="text-light mb-0" 
                    style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8",
                      fontWeight: 100,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}
                  >
                    Crafting impactful tech solutions that keep you ahead in today's digital-first world.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6" data-aos="fade-left">
              <div 
                className="d-flex align-items-start gap-4 h-100 p-4" 
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <div 
                  className="bg-primary text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    fontSize: "1.5rem",
                    fontFamily: "'Readex Pro', sans-serif",
                    fontWeight: 400
                  }}
                >
                  02
                </div>
                <div className="flex-grow-1">
                  <h4 
                    className="mb-3" 
                    style={{
                      fontWeight: 300,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}
                  >
                   Clients Above All
                  </h4>
                  <p 
                    className="text-light mb-0" 
                    style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8",
                      fontWeight: 100,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}
                  >
                    We prioritize your success with results-driven, personalized solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Text Section */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 "  style={{ marginTop: '15px' }}>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <h3 
                className="mb-4 display-6" 
                style={{
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
                Design that Inspires. Code that Performs.
              </h3>
              <p 
                className="text-light mb-4" 
                style={{ 
                  fontSize: "18px", 
                  lineHeight: "1.7",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
               With over a decade of expertise, we specialize in building modern software, intuitive user experiences, and scalable platforms tailored to business goals — delivering measurable value and long-term success.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="position-relative h-100">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100" 
                  style={{
                    background: "linear-gradient(135deg, rgba(46, 7, 108, 0.1) 0%, rgba(0,0,0,0) 100%)",
                    zIndex: 0,
                    borderRadius: "12px"
                  }}
                />
                
          <div className="position-relative mb-5" style={{ zIndex: 1 }}>
            <img 
              src="/dash.jpg" 
              alt="Team working" 
              className="img-fluid rounded shadow" 
              style={{ height: '60%', width:"100%" }}
            />
          </div>


              </div>
            </div>
          </div>
        </section>

        {/* Webflow Feature Section */}
       <section className="container-fluid px-lg-5 px-md-4 px-3 py-5 bg-dark">
         <div className="row align-items-center">
           <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
             {featureTabs.map((tab) => (
               <div key={`content-${tab.id}`} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
                 <h2 
                   className="mb-4 display-5" 
                   style={{
                     fontWeight: 200,
                     fontFamily: "'Readex Pro', sans-serif"
                   }}
                 >
                   {tab.headline}
                 </h2>
                 <p 
                   className="text-light mb-4" 
                   style={{ 
                     fontSize: "20px", 
                     lineHeight: "1.7",
                     fontWeight: 100,
                     fontFamily: "'Readex Pro', sans-serif"
                   }}
                 >
                   {tab.mainDescription}
                 </p>
                 <Card 
                   style={{ 
                     backgroundColor: "#1a1a1a", 
                     border: "1px solid #333", 
                     borderRadius: "12px",
                     transition: "transform 0.3s ease"
                   }}
                 >
                   <CardContent className="p-4">
                     <h5 
                       className="text-white mb-0 fs-4" 
                       style={{
                         fontWeight: 200,
                         fontFamily: "'Readex Pro', sans-serif"
                       }}
                     >
                       {tab.cardText}
                     </h5>
                   </CardContent>
                 </Card>
               </div>
             ))}
           </div>
           
           <div className="col-lg-6" data-aos="fade-left">
             <div className="ps-lg-5">
               {featureTabs.map((tab) => (
                 <div
                   key={tab.id}
                   className={`p-4 border-start border-3 mb-4 transition-all ${activeTab === tab.id ? "border-primary" : "border-secondary opacity-75"}`}
                   style={{ 
                     cursor: "pointer", 
                     transition: "all 0.3s ease",
                     backgroundColor: activeTab === tab.id ? "rgba(107, 33, 245, 0.1)" : "transparent",
                     borderRadius: "8px",
                   }}
                   onClick={() => setActiveTab(tab.id)}
                 >
                   <div className="d-flex align-items-center">
                     <span className="me-3 fs-4">{tab.icon}</span>
                     <div>
                       <h4 
                         className={`mb-2 ${activeTab === tab.id ? "text-white" : "text-light"}`} 
                         style={{ 
                           fontSize: "22px",
                           fontWeight: 300,
                           fontFamily: "'Readex Pro', sans-serif"
                         }}
                       >
                         {tab.title}
                       </h4>
                       <p 
                         className="mb-0" 
                         style={{ 
                           lineHeight: "1.7",
                           fontWeight: 100,
                           fontFamily: "'Readex Pro', sans-serif",
                           display: activeTab === tab.id ? "block" : "none",
                           color: "rgba(255,255,255,0.7)"
                         }}
                       >
                         {tab.description}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>

        {/* Services Section */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 py-5">
          <div className="row">
            <div className="col-12 mb-5 text-center" data-aos="fade-up">
              <h2 
                className="mb-4 display-5" 
                style={{
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
                Complete Solutions, Custom Fit
              </h2>
              <p 
                className="text-light mx-auto" 
                style={{ 
                  maxWidth: "700px", 
                  fontSize: "18px", 
                  lineHeight: "1.7",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
                Our tailored digital services help your business grow, evolve, and lead.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: "Web Development",
                description: "Custom websites and apps built for speed, performance, and scalability.",
                image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "UI/UX Design",
                description: "Clean, intuitive designs that engage users and drive results.",
                image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Mobile Applications",
                description: "Cross-platform mobile apps with smooth, consistent user experiences.",
                image: "https://images.unsplash.com/photo-1603566234499-85676f87022f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div 
                  className="rounded d-flex flex-column p-5 h-100" 
                  style={{ 
                     width: "100%",
    height: "250px",
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    minHeight: "400px",
                    transition: "all 0.3s ease",
                    background: "linear-gradient(145deg, #1a1a1a 0%, #111111 100%)",
  //   backgroundImage: `url(${service.image})`,
  //     backgroundSize: "fit",      // or "cover" for full coverage
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                >
                  <div 
                    className="  mb-4 " 
                    style={{ 
                       width: "30vw",
    // height: "60vh", // or "100vh" for full viewport height
    overflow: "hidden",
    position: "relative",
    objectFit: "contain",
                    }}
                  >
                    < img src={service.image} className='rounded'  style={{
        width: "80%",
        // height: "100%",
        objectFit: "contain",
        // objectPosition: "center",
       
      }} />   
                  </div> 
                  <h3 
                    className="text-white mb-3" 
                    style={{
                      fontWeight: 200,
                      fontFamily: "'Readex Pro', sans-serif"
                     
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-light flex-grow-1" 
                    style={{ 
                      lineHeight: "1.7",
                      fontWeight: 100,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}
                  >
                    {service.description}
                  </p>
                  {/* <Button 
                    variant="ghost" 
                    className="align-self-start mt-auto p-0 d-flex align-items-center"
                    style={{ fontWeight: 100 }}
                    onClick={() => navigate('/services')}
                  >
                    Explore Us <span className="ms-2">→</span>
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team CTA Section */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 py-5 bg-dark">
          <div className="row align-items-center ">
            <div className="col-lg-9 mb-5 mb-lg-0" data-aos="fade-right">
              <h2 
                className="mb-4 display-5" 
                style={{
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
                Ready to Elevate Your Digital Presence?
              </h2>
              <p 
                className="text-light mb-4" 
                style={{ 
                  fontSize: "20px", 
                  lineHeight: "1.7",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}
              >
                Our team of experts is standing by to help you create exceptional digital experiences that drive real business results.
              </p>
            </div>
            <div className="col-lg-3" data-aos="fade-left">
              <div className="d-flex gap-3 justify-content-lg-end justify-content-center">
                <Link to="/contactus">
  <Button 
    variant="primary" 
    style={{ 
      padding: "15px 30px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 300
    }}
  >
    Get in Touch
  </Button>
</Link>
                
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default About;