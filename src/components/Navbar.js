import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/home">หน้าหลัก</Link></li>
            <li 
              className="home-link"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to="/about">เกี่ยวกับโปลีฯ</Link>
            </li>
            <li><Link to="/courses">สาขาที่เปิดสอน</Link></li>
            <li><Link to="/contact">ติดต่อเรา</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
