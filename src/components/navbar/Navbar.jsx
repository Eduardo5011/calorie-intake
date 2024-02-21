import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbar.css";

import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]); //cookies

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleNavClick = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const navigate = useNavigate();

  const logout = useLogout();

  const signOut = async () => {
    setCookies("access_token", "");
    await logout();
    navigate("/login");
  };

  return (
    <header>
      <Link className="home" as={Link} to="/home" onClick={handleNavClick}>Calories</Link>
      <nav ref={navRef}>
        <Link as={Link} to="/login">
          Home
        </Link>
        <Link as={Link} to="/mealInput" onClick={handleNavClick}>
          Meals
        </Link>
        <Link as={Link} to="/savedItems" onClick={handleNavClick}>
          My Favorites
        </Link>
        {!cookies.access_token ? (
          <Link as={Link} to="/register" onClick={handleNavClick}>
            Login/Register
          </Link>
        ) : (
          <>
            <button onClick={() => { signOut(); handleNavClick(); }}>Logout</button>
          </>
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Navbar;
