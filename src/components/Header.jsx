import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="header-link" to="/">
        <h1>GeoSpotter</h1>
      </Link>

      <p>Map your world, one point at a time.</p>
    </header>
  );
}

export default Header;