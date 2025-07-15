import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`} role="navigation" aria-label="Main Navigation">
       <Link to="hero" smooth={true} offset={0} duration={500} className="brand">
  <img src={logo} className="logoi" alt="Company Logo" />
  <p className="company-name">Yuvas Film Production</p>
</Link>

        <ul
          id="navbar-menu"
          ref={menuRef}
          className={`nav-links ${mobileMenu ? 'active' : 'mobile-menu'}`}
        >
          {['hero', 'work', 'about', 'gallery', 'films', 'contact'].map((section, i) => (
            <li key={i}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={section === 'about' ? -150 : -260}
                duration={500}
                onClick={closeMenu}
                activeClass="active-link"
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-expanded={mobileMenu}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <img src={menu_icon} alt="" />
        </button>
      </nav>

      {mobileMenu && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
