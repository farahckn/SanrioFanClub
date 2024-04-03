import { Link } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add a Character</Link>
        </li>
        <li>
          <Link to="/characters">All Characters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
