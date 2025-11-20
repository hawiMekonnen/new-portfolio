function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-about">
          <h5>About Me</h5>
          <p style={{ fontSize: "14px" }}>
            A passionate software engineer specializing in UI/UX, web design,
            and full-stack development. Building solutions that blend creativity
            with functionality.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h5>Connect</h5>
          <div className="social-icons">
            <a
              href="https://github.com/hawiMekonnen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hawi-mekonnen-55b17938b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:hawimekonnen27@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
