import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to="/#about-me">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#work-experience">
            Work Experience
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
