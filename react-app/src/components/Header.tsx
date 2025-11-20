function Header() {
  return (
    <div className="header">
      <h1>portfolio.</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
