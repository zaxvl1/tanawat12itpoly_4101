import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* วิดีโอแบบเต็มหน้าจอ */}
      <video className="full-screen-video" controls autoPlay muted loop>
        <source src="polyvdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;
