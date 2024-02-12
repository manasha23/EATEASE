import React, { useState } from "react";
import { data } from "../Pages/restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../components/Menu";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">EATEASE</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={() =>setShowMenu(!showMenu)}>OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
      {showMenu && <Menu />} {/* Render the Menu component conditionally */}
    </>
  );
};

export default Navbar;