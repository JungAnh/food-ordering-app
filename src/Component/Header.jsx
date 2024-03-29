import about from "../assets/image/about-image.png";
import cartIcon from "../assets/icon/cart.png";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token');
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event("storage"))
    navigate("/");
  }

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    window.addEventListener('storage', checkAuthToken);

    return () => {
      window.removeEventListener('storage', checkAuthToken);
    }
  }, [])

  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={about} alt="logo" className="w-10 h-10 object-cover" />
          </Link>

        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/about" className="text-xl">About</Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="logo" className="w-6" />
            {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-3 -right-4 ">{cartCount}</div> : null}
          </Link>
          {
            isLoggedIn ?
              <Button onClick={handleLogout}>Log out</Button> :
              (
                <>
                  <Link to="/login">Log in</Link>
                  <Link to="/register">Sign up</Link>
                </>
              )
          }
        </div>
      </div>
    </nav>
  )
}