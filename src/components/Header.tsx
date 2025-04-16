import GithubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";

function Header() {
  return (
    <header>
      <div className="header-main-wrapper">
        <h1>Andrew Hu</h1>
        <div className="header-sub-heading">
          Software Engineer
          <div>
            <a
              href="https://github.com/Andrewyuhu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={GithubIcon} className="header-icons"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-hu-3a5165253/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LinkedinIcon} className="header-icons"></img>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
