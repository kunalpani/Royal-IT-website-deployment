import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Query from Website Footer");
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Business Type: ${form.business}\n` +
      `Query: ${form.query}`
    );

    // Open mail client
    window.location.href = `mailto:indoreroyalit@gmail.com?subject=${subject}&body=${body}`;

    // Show thank you popup
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    // Reset form
    setForm({
      name: '',
      email: '',
      business: '',
      query: ''
    });
  };

  return (
    <footer
      style={{
        minHeight: '100vh',
        // background: 'radial-gradient(ellipse at 60% 40%, #232323 0%, #111 80%, #000 100%)',
       
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: "'Readex Pro', Inter, Arial, sans-serif"
      }}
    >
      <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', maxWidth: 700 }}>
        <div className="w-100 d-flex flex-column align-items-center text-center mb-4">
          <h2 style={{
            fontSize: 44,
            fontWeight: 800,
            marginBottom: 8,
            marginTop: 32,
            letterSpacing: '-1.5px',
            lineHeight: 1.1
          }}>
            Have a Query?<br />Let Us Know Here!
          </h2>
          <div style={{
            color: '#b0b0b0',
            fontSize: 18,
            marginTop: 12,
            marginBottom: 24
          }}>
            Reach out to our team and we’ll get back to you soon.
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center align-items-center mb-4" style={{ maxWidth: 700 }}>
          <span style={{
            color: '#b0b0b0',
            fontWeight: 500,
            fontSize: 15
          }}>indoreroyalit@gmail.com</span>
        </div>

        <div className="w-100" style={{ maxWidth: 700 }}>
          {submitted ? (
            <div className="text-center py-5">
              <div className="mb-3">
                <i className="bi bi-check-circle-fill text-success fs-1"></i>
              </div>
              <h5 className="fw-bold mb-2">Thank you!</h5>
              <div className="text-secondary">We’ll get in touch soon.</div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                background: 'rgba(24,24,24,0.92)',
                borderRadius: 18,
                padding: '32px 24px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                backdropFilter: 'blur(2px)',
                margin: '0 auto'
              }}
            >
              <div className="mb-3">
                <label className="form-label" style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 16 }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    background: '#181818',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    boxShadow: '0 2px 8px 0 rgba(24,119,242,0.10)',
                    fontSize: 17,
                    padding: '14px 18px',
                    transition: 'box-shadow 0.2s',
                  }}
                  placeholder="Add Your Full Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 16 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    background: '#181818',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    boxShadow: '0 2px 8px 0 rgba(24,119,242,0.10)',
                    fontSize: 17,
                    padding: '14px 18px',
                    transition: 'box-shadow 0.2s',
                  }}
                  placeholder="Add Your Mail ID"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 16 }}>Business</label>
                <select
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    background: '#181818',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    boxShadow: '0 2px 8px 0 rgba(24,119,242,0.10)',
                    fontSize: 17,
                    padding: '14px 18px',
                    transition: 'box-shadow 0.2s',
                  }}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Project Enquiry">Project Enquiry</option>
                  <option value="Collabration">Collabration</option>
                  <option value="Hiring">Hiring</option>
                  <option value="Technical support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label" style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 16 }}>What's Your Query?</label>
                <textarea
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  className="form-control"
                  rows={3}
                  style={{
                    background: '#181818',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    boxShadow: '0 2px 8px 0 rgba(24,119,242,0.10)',
                    fontSize: 17,
                    padding: '14px 18px',
                    transition: 'box-shadow 0.2s',
                  }}
                  placeholder="I need to Expand My Business"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  background: 'linear-gradient(90deg, #1877f2 0%, #005bea 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: 10,
                  border: 'none',
                  boxShadow: '0 4px 16px 0 rgba(24,119,242,0.10)',
                  fontSize: 20,
                  padding: '14px 0',
                  letterSpacing: '0.5px',
                  transition: 'background 0.2s, box-shadow 0.2s'
                }}
              >
                <span style={{ verticalAlign: 'middle' }}>Submit</span>
                {/* <i className="bi bi-send ms-2" style={{ verticalAlign: 'middle' }}></i> */}
              </button>
            </form>
          )}
        </div>
      </div>

       <div className="container">
    <div className="row justify-content-between text-center text-md-start">
      {/* Left Section */}
      <div className="col-md-6 mb-4">
  <h4 className="fw-bold" style={{ fontSize: '28px' }}>
    Royal IT Services
  </h4>
  <p className="mt-3" style={{ color: '#b0b0b0', fontSize: '16px' }}>
    Crowning your business with cutting-edge technology
  </p>

  {/* Social Icons */}
  <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
    <a
      href="https://www.instagram.com/royal_it_services/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#b0b0b0', fontSize: '29px' }}
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A14623751&keywords=royal%20it%20service&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&sid=~aZ"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#b0b0b0', fontSize: '29px' }}
    >
      <FaLinkedin />
    </a>
  </div>
</div>

      {/* Services Section */}
      <div className="col-md-2 mb-4">
        <h6 className="text-uppercase fw-bold mb-3">Services</h6>
        <ul className="list-unstyled" style={{ color: '#b0b0b0', fontSize: '14px' }}>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>UI/UX Design</li>
          <li>Cloud Solutions</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="col-md-2 mb-4">
        <h6 className="text-uppercase fw-bold mb-3">Connect</h6>
        <ul className="list-unstyled" style={{ color: '#b0b0b0', fontSize: '14px', gap:'30px' }}>
          <li><a href="mailto:indoreroyalit@gmail.com" style={{ color: '#b0b0b0', textDecoration: 'none' }}>indoreroyalit@gmail.com</a></li>
          <li>+91-92851-92850</li>
          <li><a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A14623751&keywords=royal%20it%20service&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&sid=~aZ" style={{ color: '#b0b0b0', textDecoration: 'none' }}>LinkedIn</a></li>
          <li><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>GitHub</a></li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <hr style={{ borderColor: '#222' }} />

    {/* Copyright */}
    <div className="text-center" style={{ fontSize: '12px', color: '#b0b0b0' }}>
      COPYRIGHT © 2025 Royal IT Services | ALL RIGHTS RESERVED.
    </div>
  </div>
    </footer>
  );
};

export default Footer;
