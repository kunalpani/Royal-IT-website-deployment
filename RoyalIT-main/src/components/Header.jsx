import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* Load Google Font with multiple weights */}
      <link
        href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
        style={{
          background: 'transparent',
          borderBottom: 'none',
          backdropFilter: 'none',
          zIndex: 1000,
          fontFamily: "'Readex Pro', sans-serif",
          fontWeight: 300, // Default weight for all text
        }}
      >
        <div className="container">
          <div
            className="w-100 px-3"
            style={{
              background: 'rgba(0,0,0,0.95)',
              borderRadius: '20px',
              padding: '12px 24px',
              boxShadow: '0 0 30px rgba(0,0,0,0.3)',
              border: '1px solid #222',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="d-flex align-items-center justify-content-between w-100 flex-wrap flex-lg-nowrap">
              {/* Logo */}
              <motion.a
                className="navbar-brand d-flex align-items-center me-lg-4 mb-2 mb-lg-0"
                href="/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontWeight: 200 }} // Lighter weight for logo text
              >
                <motion.div
                  className="d-inline-flex align-items-center justify-content-center me-2"
                  style={{
                    width: 150,
                    height: 48,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="public\\videos\\intro.mp4\\logo.PNG"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              </motion.a>

              {/* Toggle */}
              <button
                className="navbar-toggler border-0 ms-auto d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                style={{ fontWeight: 300 }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Nav Links */}
              <div
                className="collapse navbar-collapse mt-3 mt-lg-0 justify-content-lg-between w-100"
                id="navbarNav"
              >
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 gap-3">
                  <ul className="navbar-nav flex-column flex-lg-row align-items-center text-center mb-2 mb-lg-0 mx-lg-auto">
                    {[
                      { name: 'Home', path: '/', weight: 300 },
                      { name: 'About', path: '/about', weight: 300 },
                      { name: 'Service', path: '/Services', weight: 300 },
                      { name: 'Contact Us', path: '/Contactus#contactForm', weight: 300 },
                    ].map((item) => (
                      <li className="nav-item px-3" key={item.name}>
                        <motion.div style={{ position: 'relative' }}>
                          <Link
                            to={item.path.split('#')[0]}
                            className="nav-link"
                            style={{
                              color:
                                location.pathname === item.path.split('#')[0]
                                  ? '#4cc9f0'
                                  : '#fff',
                              fontSize: '1.1rem',
                              textAlign: 'center',
                              transition: 'all 0.3s ease',
                              fontFamily: "'Readex Pro', sans-serif",
                              fontWeight: item.weight,
                            }}
                          >
                            {item.name}
                            {location.pathname === item.path.split('#')[0] && (
                              <motion.span
                                className="position-absolute"
                                style={{
                                  bottom: -5,
                                  left: 0,
                                  right: 0,
                                  height: 2,
                                  background:
                                    'linear-gradient(90deg, #a084e8, #4cc9f0)',
                                  borderRadius: 2,
                                }}
                                layoutId="navUnderline"
                              />
                            )}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div className="text-center text-lg-end">
                    <HashLink
                      to="/Contactus#contactForm"
                      className="btn rounded-pill px-4 py-2"
                      style={{
                        background: 'linear-gradient(135deg, #a084e8, #4cc9f0)',
                        border: 'none',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(160, 132, 232, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        fontFamily: "'Readex Pro', sans-serif",
                        fontWeight: 400, // Slightly heavier for button
                      }}
                    >
                      <motion.span
                        className="position-absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                          width: '100%',
                          height: '100%',
                          background:
                            'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                          transform: 'translate(-50%, -50%)',
                          opacity: 0,
                        }}
                        whileHover={{ opacity: 1, scale: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span style={{ position: 'relative', zIndex: 1 }}>
                        Get Started
                      </span>
                    </HashLink>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;