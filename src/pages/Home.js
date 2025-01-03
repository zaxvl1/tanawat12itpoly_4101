import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* วิดีโอ */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="polyvdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="video-title">Welcome to Lanna Polytechnic</h1>
          <p className="video-subtitle">"สร้างคนดี ให้มีความรู้ สู่สังคม"</p>
        </div>
      </div>

      {/* เนื้อหาเพิ่มเติม */}
      <div className="home-content">
        <h2>เกี่ยวกับเรา</h2>
        <p>
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ มุ่งเน้นการสร้างคนดี
          ให้มีความรู้ และนำไปพัฒนาสังคมด้วยคุณธรรมและจริยธรรม
        </p>
      </div>
    </div>
  );
};

export default Home;
