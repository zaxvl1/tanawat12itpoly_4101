import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">การติดต่อ</h1>
      <div className="contact-content">
        {/* ข้อมูลการติดต่อ */}
        <div className="contact-info">
          <h2>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</h2>
          <p>2 ถนนเวียงบัว ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300</p>
          <p>
            <strong>โทรศัพท์:</strong> 0 5321 3061, 0 5321 3144, 0 5321 9175
          </p>
          <p>
            <strong>แฟกซ์:</strong> 0 5340 8223
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a href="https://www.facebook.com/lannapolyCNX" target="_blank" rel="noopener noreferrer">
              facebook.com/lannapolyCNX
            </a>
          </p>
          <p>
            <strong>E-mail:</strong> <a href="mailto:lannapoly@lannapoly.ac.th">lannapoly@lannapoly.ac.th</a>
          </p>
        </div>

        {/* แผนที่ */}
        <div className="contact-map">
          <h2>แผนที่</h2>
          <img src="https://www.lannapoly.ac.th/web/assets/map-CuXpt1ow.jpg" alt="แผนที่วิทยาลัย" className="map-image" />
        </div>
      </div>

      {/* ข้อมูลเพิ่มเติม */}
      <div className="contact-footer">
        <div className="footer-info">
          <img
            src="/path/to/logo.png"
            alt="Lanna Polytechnic Logo"
            className="footer-logo"
          />
          <p><strong>อัตลักษณ์:</strong> "เป็นคนดี มีความรู้ สู่สังคม"</p>
          <p><strong>เอกลักษณ์:</strong> "สร้างคนดี ให้มีความรู้ สู่สังคม"</p>
          <p><strong>โทร:</strong> 053 213 061</p>
          <p><strong>E-mail:</strong> lannapoly@lannapoly.ac.th</p>
        </div>
        <div className="footer-icons">
          <a href="#" className="icon-link">Facebook</a>
          <a href="#" className="icon-link">Instagram</a>
          <a href="#" className="icon-link">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
