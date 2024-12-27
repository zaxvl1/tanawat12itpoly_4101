import React from 'react';
import './About.css'; // นำเข้าไฟล์ CSS

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">ประวัติวิทยาลัยฯ</h1>
      <p>About Lanna Polytechnic ChiangMai</p>

      <div className="about-cards">
        <div className="about-card">
          <img src="link_to_image1" alt="คุณบูทอง กิติบุตร" />
          <p>คุณบูทอง กิติบุตร</p>
        </div>
        <div className="about-card">
          <img src="link_to_image2" alt="คุณเรียงพันธุ์ ทิพยมนกาล" />
          <p>คุณเรียงพันธุ์ ทิพยมนกาล</p>
        </div>
      </div>
    </div>
  );
}

export default About;
