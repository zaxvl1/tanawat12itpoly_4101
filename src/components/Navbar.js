import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 053 213 061</span>
          <span>📧 lannapoly@lannapoly.ac.th</span>
          <a href="#" className="apply-link">สมัครเรียน</a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src="polylogo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">หน้าหลัก</a></li>
            <li 
              className="about-link"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="About.js">เกี่ยวกับโปลีฯ</a>
              
            </li>

            <li><a href="#">สาขาที่เปิดสอน</a></li>

            <li><a href="#">ติดต่อเรา</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
