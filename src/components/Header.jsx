import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Down from '../images/icon-arrow-down.svg';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSideBar = () => {
    setSidebarVisible(true);
  };

  const hideSideBar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className='header'>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li onClick={hideSideBar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Submit</a></li>
        </ul>

        <ul>
          <li className='logoImg'><img src={Logo} alt="SunnySide Logo" /></li>
          <li className="hideOnMobile"><a href="#">About</a></li>
          <li className="hideOnMobile"><a href="#">Services</a></li>
          <li className="hideOnMobile"><a href="#">Projects</a></li>
          <li className="hideOnMobile"><a href="#">Submit</a></li>
          <li className="menu-button" onClick={showSideBar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div className="heroSection">
        <h2>WE ARE CREATIVES</h2>
        <img src={Down} alt="Down arrow Icon" />
      </div>
      </header>
  );
};

export default Header;
