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
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#work-experiencee">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            About
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
