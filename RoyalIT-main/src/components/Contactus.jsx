import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Link } from 'react-router-dom';
// import Footer from './Footer';

const Contactus = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email Us",
      detail: <span style={{ color: 'white' }}>indoreroyalit@gmail.com</span>,
      action: "mailto:info@krishnabusiness.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Call Us",
      detail: <span style={{ color: 'white' }}>+918458888458 , +919285192850</span>,
      action: "tel:+919876543210"
      
    }
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
          overflow: "hidden",
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover"
        }}>
          <div className="container-fluid position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-10 mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <span className="text-primary me-3" style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      fontFamily: "'Readex Pro', sans-serif"
                    }}>
                      //
                    </span>
                    <h1 className="mb-0" style={{
                      fontSize: "3rem",
                      fontWeight: 300,
                      fontFamily: "'Readex Pro', sans-serif",
                      letterSpacing: "-1.5px",
                      background: "linear-gradient(90deg, #A1BFFF 0%, #FFFFFF 50%, #A649D2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}>
                      CONNECT WITH US
                    </h1>
                  </div>
                  
                  <div className="border-start border-primary border-3 ps-4 mb-5">
                    <p className="mb-0" style={{ 
                      fontSize: "1.5rem",
                      lineHeight: "1.6",
                      fontWeight: 100,
                      fontStyle: "italic",
                      fontFamily: "'Readex Pro', sans-serif",
                      letterSpacing: "0.5px"
                    }}>
                      "Your vision, our expertise - let's create something extraordinary"
                    </p>
                  </div>
                  
                  <p className="text-light mb-4" style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    fontWeight: 100,
                    fontFamily: "'Readex Pro', sans-serif"
                  }}>
                   At Royal IT Services, we're committed to providing exceptional service and building lasting relationships. Whether you're looking for office space, business solutions, or just want to connect, our team is ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container-fluid px-lg-5 px-md-4 px-3 py-5">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-5">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3" style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  borderRadius: "20px",
                  fontWeight: 300,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  OUR OFFICE
                </span>
                <h2 className="mb-4" style={{
                  fontSize: "2.5rem",
                  fontWeight: 200,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  Visit Our Business Center
                </h2>
                
                <div className="mb-5" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.471031418638!2d75.89464142115796!3d22.748581623764697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd017f4c10db%3A0x46eab79a78b02055!2sKrishna%20business%20centre!5e0!3m2!1sen!2sin!4v1751890434258!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Krishna Business Centre Location"
                  ></iframe>
                </div>

                <div className="row g-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="col-md-6">
                      <a 
                        href={method.action} 
                        className="d-flex align-items-center text-decoration-none p-3" 
                        style={{
                          backgroundColor: "#111111",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                          height: "100%",
                          border: "1px solid rgba(255,255,255,0.05)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.backgroundColor = "#1a1a1a";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.backgroundColor = "#111111";
                        }}
                      >
                        <div className="text-primary me-3" style={{ width: "40px" }}>
                          {method.icon}
                        </div>
                        <div>
                          <h5 className="text-white mb-1" style={{ 
                            fontSize: "1.1rem",
                            fontWeight: 300,
                            fontFamily: "'Readex Pro', sans-serif"
                          }}>{method.title}</h5>
                          <p className="text-muted mb-0" style={{ 
                            fontSize: "0.9rem",
                            fontWeight: 100,
                            fontFamily: "'Readex Pro', sans-serif"
                          }}>{method.detail}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <h4 className="text-white mb-3" style={{ 
                    fontWeight: 200,
                    fontFamily: "'Readex Pro', sans-serif"
                  }}>Business Hours</h4>
                  <div className="bg-dark p-4 rounded-3" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                    <ul className="list-unstyled mb-0">
                      {[
                        { day: "Monday - Saturday", time: "10:00 AM - 7:00 PM" },
                        { day: "Sunday", time: "Closed" }
                      ].map((item, index, array) => (
      <li 
        key={index} 
        className="d-flex justify-content-between py-2"
        style={{ 
          borderBottom: index !== array.length - 1 
            ? "1px solid rgba(255,255,255,0.1)" 
            : "none" 
        }}
      >
        <span className="text-light" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>{item.day}</span>
        <span className="text-primary" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>{item.time}</span>
      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          <div className="col-lg-6" id="contactForm">
  <div 
  className="bg-black p-4 p-lg-5 rounded-3" 
  style={{ 
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    background: "linear-gradient(135deg, rgba(3, 3, 3, 0.8), rgba(13, 13, 13, 0.19))" // Gradient effect
  }}
>
    <div className="d-flex align-items-center mb-4">
      <span className="text-primary me-3" style={{
        fontSize: "2rem",
        fontWeight: 500,
        fontFamily: "'Readex Pro', sans-serif"
      }}>
        //
      </span>
      <h3 className="text-white mb-0" style={{ 
        fontWeight: 200,
        fontFamily: "'Readex Pro', sans-serif",
        fontSize: "1.8rem"
      }}>Get In Touch</h3>
    </div>
                <p className="text-light mb-4" style={{ 
                  fontSize: "1.05rem",
                  fontWeight: 100,
                  fontFamily: "'Readex Pro', sans-serif"
                }}>
                  Have questions about our business center or services? Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
           <form onSubmit={(e) => {
           e.preventDefault();
  alert("Thank you! Our team will reach out to you shortly.");

  const subject = encodeURIComponent("New Contact Form Submission");
  const body = encodeURIComponent(
    `Full Name: ${formData.name}\n` +
    `Mail ID: ${formData.email}\n` +
    `Phone Number: ${formData.phone}\n` +
    `Service Interested In: ${formData.service}\n` +
    `Message: ${formData.message}`
  );
  window.location.href = `indoreroyalit@gmail.com?subject=${subject}&body=${body}`;
}}>
  <div className="row g-3">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="name" className="form-label text-light mb-2" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>Full Name*</label>
        <input
          type="text"
          className="form-control bg-black border-dark text-white"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ height: "50px" }}
          placeholder="Enter your name"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="email" className="form-label text-light mb-2" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>Email Address*</label>
        <input
          type="email"
          className="form-control bg-black border-dark text-white"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ height: "50px" }}
          placeholder="Enter your email"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="phone" className="form-label text-light mb-2" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>Phone Number</label>
        <input
          type="tel"
          className="form-control bg-black border-dark text-white"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ height: "50px" }}
          placeholder="Enter phone number"
        />
      </div>
    </div>
    <div className="col-md-6">
    </div>
    <div className="col-12">
      <div className="form-group">
        <label htmlFor="service" className="form-label text-light mb-2" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>Service Interested In</label>
        <select
          className="form-select bg-black border-dark text-white"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={{ height: "50px" }}
        >
          <option value="">Select a service</option>
          <option value="office-space">Project enquiry</option>
          <option value="meeting-rooms">Collaboration</option>
          <option value="virtual-office">Hiring</option>
          <option value="business-support">Technical Support</option>
          <option value="other">Other Services</option>
        </select>
      </div>
    </div>
    <div className="col-12">
      <div className="form-group">
        <label htmlFor="message" className="form-label text-light mb-2" style={{
          fontWeight: 100,
          fontFamily: "'Readex Pro', sans-serif"
        }}>Your Message*</label>
        <textarea
          className="form-control bg-black border-dark text-white"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your requirements..."
        ></textarea>
      </div>
    </div>
    <div className="col-12 mt-4">
      <button 
        type="submit" 
        className="btn btn-primary w-100 py-3"
        style={{ 
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: 300,
          fontFamily: "'Readex Pro', sans-serif",
          border: "none",
          letterSpacing: "1px",
          textTransform: "uppercase",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,100,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Send Message
          </button>
          </div>
          </div>
        </form>


              </div>
            </div>
          </div>
        </section>
 <footer className="py-4" style={{ 
          backgroundColor: 'black', 
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-4" style={{
              color: '#b0b0b0',
              fontWeight: 500,
              fontSize: 15,
              fontFamily: "'Readex Pro', Inter, Arial, sans-serif"
            }}>
              <Link to="/" style={{ 
                color: '#b0b0b0', 
                textDecoration: 'none',
                ':hover': { color: '#ffffff' }
              }}>Home</Link>
              <Link to="/about" style={{ 
                color: '#b0b0b0', 
                textDecoration: 'none',
                ':hover': { color: '#ffffff' }
              }}>About</Link>
              <Link to="/services" style={{ 
                color: '#b0b0b0', 
                textDecoration: 'none',
                ':hover': { color: '#ffffff' }
              }}>Services</Link>
              <Link to="/contact-us" style={{ 
                color: '#ffffff', // Highlight current page
                textDecoration: 'none',
                fontWeight: 600,
                ':hover': { color: '#ffffff' }
              }}>Contact Us</Link>
            </div>
            
            {/* Optional Copyright Text */}
            
          </div>
        </footer>
        
      </div>
    </>
  );
};

export default Contactus;