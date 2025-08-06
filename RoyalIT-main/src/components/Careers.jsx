import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Careers = () => {
  const [activeTab, setActiveTab] = useState("stories");
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const stories = [
    {
      id: 1,
      title: "How we build the Dagmarket in 6 months",
      author: "Kaur Kaljuma",
      date: "May 20th 2020",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://via.placeholder.com/300x200?text=Story+1"
    },
    {
      id: 2,
      title: "The last announcement for success factory",
      author: "Raigo Tuulik",
      date: "May 20th 2020",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://via.placeholder.com/300x200?text=Story+2"
    },
    {
      id: 3,
      title: "The Role of Repetition in Conversation Design",
      author: "Jüri Siilivask",
      date: "May 20th 2020",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://via.placeholder.com/300x200?text=Story+3"
    },
    {
      id: 4,
      title: "What I Learned From Getting Hired",
      author: "Mazdak Shakiba",
      date: "May 20th 2020",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://via.placeholder.com/300x200?text=Story+4"
    }
  ];

  return (
    <div className="text-white min-vh-100" style={{ backgroundColor: "#000000", overflowX: "hidden" }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-3">RIT</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Company</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container-fluid px-5 py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <span className="text-gradient-primary fs-1 fw-bold me-3">//</span>
              <h1 className="text-white fw-bold mb-0" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>Careers</h1>
            </div>
            <h2 className="text-muted mb-4" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
              The future of work
            </h2>
            <p className="text-light mb-5" style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "600px" }}>
              What is the future of work? To find out, look no further than your own home. Connect with colleagues from across the globe while doing work that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="container-fluid px-5 py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3 className="text-white fw-bold mb-0" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Stories By Royal IT SERVICES</h3>
          <button 
            className={`btn ${activeTab === "stories" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab("stories")}
          >
            View All
          </button>
        </div>

        <div className="row g-4">
          {stories.map((story) => (
            <div key={story.id} className="col-lg-3 col-md-6">
              <div className="card bg-dark border-0 h-100">
                <img src={story.image} className="card-img-top" alt={story.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="text-white fw-bold">{story.title}</h5>
                  <div className="d-flex align-items-center my-3">
                    <div className="bg-primary rounded-circle me-2" style={{ width: "30px", height: "30px" }}></div>
                    <div>
                      <p className="text-white mb-0">{story.author}</p>
                      <small className="text-muted">{story.date}</small>
                    </div>
                  </div>
                  <p className="text-muted">{story.excerpt}</p>
                  <button className="btn btn-link text-primary p-0">Read more →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="container-fluid px-5 py-5">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="text-white fw-bold mb-4" style={{ fontSize: "clamp(32px, 6vw, 48px)" }}>
              Join our fast<br />growing team
            </h2>
            <button className="btn btn-primary px-4 py-3">See open positions</button>
          </div>
          <div className="col-lg-6">
            <div className="bg-dark p-4 rounded">
              <h4 className="text-white mb-4">Join Our Team</h4>
              <p className="text-muted mb-4">
                Ready to take your career to the next level? Fill out the form and let's connect.
              </p>
              
              <form>
                <div className="mb-3">
                  <label className="form-label text-white">Full Name</label>
                  <input type="text" className="form-control bg-black border-dark text-white" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Email Address</label>
                  <input type="email" className="form-control bg-black border-dark text-white" placeholder="Enter your email address" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Phone Number</label>
                  <input type="tel" className="form-control bg-black border-dark text-white" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Portfolio URL or LinkedIn (Optional)</label>
                  <input type="url" className="form-control bg-black border-dark text-white" placeholder="Enter your portfolio URL or LinkedIn profile" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Position Applying For</label>
                  <select className="form-select bg-black border-dark text-white">
                    <option>Select a position</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Project Manager</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Upload Resume</label>
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="form-control bg-black border-dark text-white" 
                  />
                  {fileName && <small className="text-muted">{fileName}</small>}
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Why do you want to work with us?</label>
                  <textarea 
                    className="form-control bg-black border-dark text-white" 
                    rows="3" 
                    placeholder="Tell us why you're interested in joining our team..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3">Apply Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-fluid px-5 py-5 bg-black">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="text-white mb-4">RIT</h4>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Web Development</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">App Development</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">UI/UX Design</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Email Us</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Call Us</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Visit Us</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;