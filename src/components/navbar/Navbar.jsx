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


  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    
  
    await logout();
    navigate("/login");
  }



  return (
    
    <header>
      <h3 to="/home">Logo</h3>
      <nav ref={navRef}>

     

        <Link as={Link} to="/home">
          Home
        </Link>
        <Link as={Link} to="/mealInput">
          Meals
        </Link>
        <Link as={Link} to="/savedItems">
          My Favorites
        </Link>
        
        {/* <Link as={Link} to="/register">
          Register
        </Link> */}
        
      
        <button onClick={signOut}>
          Logout
        </button>
        
        
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


