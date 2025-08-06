import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
  // Font loader component
  const FontInjector = () => {
    React.useEffect(() => {
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

  const services = [
  {
    id: 1,
    title: "Software Development",
    description: "Empowering you to work smarter and achieve more then you think.",
    image: "/Software Consulting and Development Company.jpg",
    features: [
      "Custom software solutions",
      "Agile development methodology",
      "Performance optimization",
      "Scalable architecture",
      "Continuous support",
      "Cross-platform compatibility"
    ]
  },
 {
    id: 2,
    title: "Cloud Services",
    description: "Flexible cloud solutions to enhance your business operations and scalability.",
    image: "/cloud image.jpg",
    features: [
      "Cloud storage solutions",
      "Cloud migration services",
      "Managed cloud services",
      "Disaster recovery",
      "Cloud security",
      "Cost optimization"
    ]
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Robust cybersecurity solutions to protect your business from threats and ensure data integrity.",
    image: "/cyber security.jpg",
    features: [
      "Threat assessment",
      "Network security",
      "Data encryption",
      "Incident response",
      "Compliance management",
      "Security awareness training"
    ]
  },
  {
    id: 4,
    title: "Networking & Infrastructure",
    description: "Reliable networking solutions to enhance connectivity and infrastructure performance.",
    image: "/networking.jpg",
    features: [
      "Network design and implementation",
      "Cloud infrastructure setup",
      "VPN solutions",
      "Network monitoring",
      "Performance optimization",
      "Disaster recovery planning"
    ]
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Effective digital marketing strategies to boost your online presence and reach your audience.",
    image: "/digital marketing.jpg",
    features: [
      "SEO optimization",
      "Social media marketing",
      "Content marketing",
      "Email campaigns",
      "PPC advertising",
      "Analytics and reporting"
    ]
  },
  {
    id: 6,
    title: "Data Services",
    description: "Comprehensive data management solutions to help you harness the power of your data.",
    image: "/Data Services.jpg",
    features: [
      "Data analytics",
      "Data warehousing",
      "Data migration",
      "Data visualization",
      "Database management",
      "Business intelligence"
    ]
  },
  {
    id: 7,
    title: "UI/UX Design",
    description: "Creative UI/UX design services to enhance user engagement and satisfaction.",
    image: "/ui.jpg",
    features: [
      "User research",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Responsive design",
      "Branding integration"
    ]
  },
  {
    id: 8,
    title: "Graphic Design",
    description: "Professional graphic design services to create stunning visuals for your brand.",
    image: "/Graphic Design.jpg",
    features: [
      "Logo design",
      "Marketing materials",
      "Social media graphics",
      "Infographics",
      "Print design",
      "Brand identity"
    ]
  },
  {
    id: 9,
    title: "Video Editing",
    description: "High-quality video editing services to bring your stories to life.",
    image: "/videoe.jpg",
    features: [
      "Professional editing",
      "Color correction",
      "Sound design",
      "Motion graphics",
      "Video marketing",
      "Content creation"
    ]
  },
  
];

const techStack = [
  {
    name: 'React',
    icon: 'bi-lightning-charge', // Placeholder, no official React icon in Bootstrap
    color: '#61DAFB'
  },
  {
    name: 'Node.js',
    icon: 'bi-terminal-fill', // Closest match
    color: '#339933'
  },
  {
    name: 'MongoDB',
    icon: 'bi-database', // More suitable than file-earmark
    color: '#47A248'
  },
  {
    name: 'Flutter',
    icon: 'bi-phone', // Placeholder for mobile dev
    color: '#02569B'
  },
  {
    name: 'WordPress',
    icon: 'bi-wordpress', // If you're using additional icon libraries
    color: '#21759B'
  },
  {
    name: 'React Native',
    icon: 'bi-phone-landscape', // Placeholder for mobile
    color: '#61DAFB'
  },
  {
    name: 'PHP',
    icon: 'bi-file-code', // Placeholder
    color: '#777BB4'
  },
  {
    name: 'Python',
    icon: 'bi-cpu', // Approximation
    color: '#3776AB'
  },
  {
    name: 'Figma',
    icon: 'bi-palette', // Placeholder
    color: '#F24E1E'
  },
  {
    name: 'Premiere Pro',
    icon: 'bi-camera-reels', // Video related
    color: '#9999FF'
  },
  {
    name: 'After Effects',
    icon: 'bi-stars', // Animation related
    color: '#9999FF'
  },
  {
    name: 'Canva',
    icon: 'bi-brush', // Design related
    color: '#00C4CC'
  }
];


// In your component:
<div className="row g-4 justify-content-center">
  {techStack.map((tech, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
      <div className="text-center p-4" style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        height: "100%",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div className="mb-3" style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {tech.icon}
        </div>
        <h4 className="text-white mb-0" style={{
          fontWeight: 200,
          fontFamily: "'Readex Pro', sans-serif"
        }}>{tech.name}</h4>
      </div>
    </div>
  ))}
</div>

  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Technology Experts" },
    { value: "10+", label: "Countries Served" }
  ];

  return (
    <>
      <FontInjector />
      
      <div className="text-white min-vh-100" style={{ 
        backgroundColor: "#000000", 
        overflowX: "hidden",
        fontFamily: "'Readex Pro', sans-serif"
      }}>
        <Header />

        {/* Hero Section */}
        <section className="px-lg-5 px-md-4 px-3 py-5 position-relative" style={{ 
          marginTop: "90px",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}>
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
              {/* Left Column - Services Content */}
              <div className="col-lg-5 col-md-6 mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <span 
                      className="text-primary me-3" 
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        fontFamily: "'Readex Pro', sans-serif",
                        color: "#A1BFFF"
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
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                      }}
                    >
                      OUR SERVICES
                    </h1>
                  </div>
                  
                  <div 
                    className="border-start border-primary border-3 ps-4 mb-5" 
                    style={{ height: "80px" }}
                  >
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: "1.5rem",
                        lineHeight: "1.6",
                        fontWeight: 200,
                        fontStyle: "italic",
                        fontFamily: "'Readex Pro', sans-serif",
                        letterSpacing: "0.5px"
                      }}
                    >
                      "Transformative software that elevates your vision"
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
                  >
                    We deliver comprehensive IT services that transform businesses through cutting-edge technology, innovative solutions, and expert implementation.
                  </p>
                  
               <div className="d-flex gap-3">
  <a href="/Contactus#contactForm">
    <button 
      className="btn btn-primary px-4 py-3 rounded-3" 
      style={{
        letterSpacing: "1px",
        fontWeight: 300,
        transition: "all 0.3s ease",
        fontFamily: "'Readex Pro', sans-serif"
      }}
    >
      Contact Us →
    </button>
  </a>
</div>
                </div>
              </div>

              {/* Right Column - Featured Image */}
              <div className="col-lg-7 col-md-6">
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
                    src="https://plus.unsplash.com/premium_photo-1729165901311-8d76da2c64cd?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Digital technology solutions" 
                    className="w-100 h-100 object-cover"
                    style={{ objectPosition: "center top" }}
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
        <section className="container-fluid py-5" style={{ background: "#111111" }}>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="text-center p-4" style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    height: "100%",
                    background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
                    transform: "translateY(0)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                  }}>
                    <h2 className="text-primary mb-2" style={{ 
                      fontSize: "2.5rem", 
                      fontWeight: 200,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}>
                      {stat.value}
                    </h2>
                    <p 
                      className="mb-0" 
                      style={{ 
                        fontSize: "1.2rem", 
                        letterSpacing: "1px",
                        fontWeight: 300,
                        fontFamily: "'Readex Pro', sans-serif",
                        background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 text-center">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3" style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  borderRadius: "20px",
                  fontWeight: 300,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  OUR EXPERTISE
                </span>
                <h2 className="mb-4" style={{
                  fontSize: "2.5rem",
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif",
                  background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Comprehensive IT Solutions
                </h2>
                <p className="text-light mx-auto" style={{ 
                  maxWidth: "700px", 
                  fontSize: "1.1rem", 
                  lineHeight: "1.8",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  We offer end-to-end technology services designed to solve complex business challenges and drive digital transformation.
                </p>
              </div>
            </div>
            
            <div className="row g-4">
              {services.map((service) => {
                const [showFeatures, setShowFeatures] = useState(false);

                const toggleFeatures = () => {
                  setShowFeatures(!showFeatures);
                };

                return (
                  <div key={service.id} className="col-lg-4 col-md-6">
                    <div 
                      className="card border-0 h-100 overflow-hidden" 
                      style={{ 
                        backgroundColor: "#111111",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(255,255,255,0.05)"
                      }}
                    >
                     <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
  <img 
    src={service.image} 
    className="w-100 h-100 object-cover" 
    alt={service.title}
    style={{ transition: "transform 0.5s ease" }}
  />
  {/* Gradient overlay - now more concentrated at the bottom */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.8) 35%, transparent 100%)" 
  }}></div>
  {/* Title with padding for better visibility */}
  <h3 className="position-absolute bottom-0 start-0 text-white p-4 m-0" style={{
    fontSize: "1.5rem",
    fontWeight: 300,
    fontFamily: "'Readex Pro', sans-serif",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)" // Optional: adds text shadow for better contrast
  }}>
    {service.title}
  </h3>
</div>
                      
                      <div className="card-body p-4">
                        <p className="text-light mb-4" style={{ 
                          fontSize: "1rem", 
                          lineHeight: "1.8",
                          fontWeight: 100,
                          fontFamily: "'Readex Pro', sans-serif"
                        }}>
                          {service.description}
                        </p>
                        
                        <button 
                          onClick={toggleFeatures} 
                          className="btn btn-link text-primary p-0 mb-4"
                          style={{ textDecoration: 'underline' }}
                        >
                          {showFeatures ? 'Read Less' : 'Read More'}
                        </button>

                        {showFeatures && (
                          <div className="mb-4">
                            <h6 className="text-primary mb-3" style={{
                              fontSize: "0.9rem",
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                              fontWeight: 300,
                              fontFamily: "'Readex Pro', sans-serif"
                            }}>
                              Key Features:
                            </h6>
                            <ul className="list-unstyled">
                              {service.features.map((feature, index) => (
                                <li key={index} className="d-flex align-items-center mb-2">
                                  <span className="text-primary me-2">•</span>
                                  <span className="text-light" style={{
                                    fontWeight: 100,
                                    fontFamily: "'Readex Pro', sans-serif"
                                  }}>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="container-fluid py-5" style={{ background: "#111111" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 text-center">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3" style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  borderRadius: "20px",
                  fontWeight: 300,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  OUR TECH STACK
                </span>
                <h2 className="mb-4" style={{
                  fontSize: "2.5rem",
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif",
                  background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Technologies We Work With
                </h2>
                <p className="text-light mx-auto" style={{ 
                  maxWidth: "700px", 
                  fontSize: "1.1rem", 
                  lineHeight: "1.8",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  We leverage cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
                </p>
              </div>
            </div>
            
<div className="row g-4 justify-content-center">
  {techStack.map((tech, index) => (
    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          height: "100%",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="mb-3"
          style={{
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: tech.color,
          }}
        >
          <i className={`bi ${tech.icon}`} style={{ fontSize: "2.5rem" }}></i>
        </div>
        <h4
          className="text-white mb-0"
          style={{
            fontWeight: 200,
            fontFamily: "'Readex Pro', sans-serif",
          }}
        >
          {tech.name}
        </h4>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 py-5 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
  <h2 className="mb-4" style={{
    fontSize: "2.5rem",
    fontWeight: 200,
    fontFamily: "'Readex Pro', sans-serif",
    background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
    Ready to Start Your Project?
  </h2>
  <p className="text-light mb-5 mx-auto" style={{ 
    maxWidth: "700px", 
    fontSize: "1.1rem", 
    lineHeight: "1.8",
    fontWeight: 100,
    fontFamily: "'Readex Pro', sans-serif"
  }}>
    Let's discuss how we can help you achieve your business goals with our technology expertise.
  </p>
  <a href="/Contactus#contactForm">
    <button 
      className="btn btn-primary px-4 py-3 rounded-3" 
      style={{
        letterSpacing: "1px",
        fontWeight: 300,
        transition: "all 0.3s ease",
        fontFamily: "'Readex Pro', sans-serif"
      }}
    >
      GET STARTED →
    </button>
  </a>
</div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;