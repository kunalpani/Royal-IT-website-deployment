import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Marie Bellinard",
    title: "Marketing Director IBTSE",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Replace with actual video
    quote: "What sets Digidop apart is their ability to deliver a solution and empower you, no matter the challenges.",
    featured: true
  },
  {
    id: 2,
    name: "Samy Ouardini",
    title: "Co-founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Replace with actual video
    quote: "The team's expertise and dedication transformed our business operations completely.",
    featured: false
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Replace with actual video
    quote: "Outstanding service and innovative solutions that exceeded our expectations.",
    featured: false
  }
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section 
      className="py-5 position-relative"
      style={{ 
        background: "#000",
        minHeight: "600px"
      }}
    >
      <div className="container">
        {/* Title */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            style={{ 
              color: "#fff", 
              fontSize: "3.5rem", 
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 800,
              margin: "0 auto"
            }}
          >
            Hear from our customers about their experience
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="row align-items-center">
          {/* Left Side - Main Video/Testimonial */}
          <div className="col-lg-8">
            <motion.div
              className="position-relative"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#111"
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Video Container */}
              <div 
                className="position-relative"
                style={{ 
                  height: 400,
                  backgroundImage: `url(${activeTestimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Dark overlay */}
                <div 
                  className="position-absolute w-100 h-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
                  }}
                />
                
                {/* Play Button */}
                <motion.button
                  className="btn position-relative"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i 
                    className="bi bi-play-fill" 
                    style={{ 
                      fontSize: 32, 
                      color: "#000",
                      marginLeft: 4
                    }}
                  />
                </motion.button>
              </div>

              {/* Quote Overlay */}
              <div 
                className="position-absolute bottom-0 w-100 p-4"
                style={{
                  background: "linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)"
                }}
              >
                <motion.p
                  style={{
                    color: "#fff",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.4
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={activeTestimonial.id}
                  transition={{ duration: 0.5 }}
                >
                  "{activeTestimonial.quote}"
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Testimonial Thumbnails */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`position-relative cursor-pointer ${
                    activeTestimonial.id === testimonial.id ? 'active' : ''
                  }`}
                  style={{
                    borderRadius: 15,
                    overflow: "hidden",
                    height: 120,
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: activeTestimonial.id === testimonial.id 
                      ? "3px solid #4cc9f0" 
                      : "3px solid transparent",
                    cursor: "pointer"
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTestimonial(testimonial)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Dark overlay */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: activeTestimonial.id === testimonial.id 
                        ? "rgba(0,0,0,0.3)" 
                        : "rgba(0,0,0,0.6)"
                    }}
                  />
                  
                  {/* Play button */}
                  <div 
                    className="position-absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <i 
                        className="bi bi-play-fill" 
                        style={{ 
                          fontSize: 16, 
                          color: "#000",
                          marginLeft: 2
                        }}
                      />
                    </div>
                  </div>

                  {/* Name and title */}
                  <div 
                    className="position-absolute bottom-0 w-100 p-3"
                    style={{
                      background: "linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)"
                    }}
                  >
                    <h6 
                      style={{ 
                        color: "#fff", 
                        margin: 0, 
                        fontSize: "0.9rem",
                        fontWeight: 600
                      }}
                    >
                      {testimonial.name}
                    </h6>
                    <p 
                      style={{ 
                        color: "#ccc", 
                        margin: 0, 
                        fontSize: "0.75rem"
                      }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}