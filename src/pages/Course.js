import React from "react";
import "./Course.css";

const Course = () => {
  return (
    <div className="course-container">
      <h1 className="course-title">สาขาที่เปิดสอน ปวช. / เอกสารการสมัคร</h1>
      <div className="course-content">
        {/* สาขาที่เปิดสอน */}
        <div className="course-list">
          <h2>สาขาที่เปิดสอน</h2>
          <ul>
            <li>สาขางานยานยนต์ (Auto Mechanical Technology)</li>
            <li>สาขางานไฟฟ้ากำลัง (Electrical Power Technology)</li>
            <li>สาขางานก่อสร้าง (Construction Technology)</li>
            <li>สาขาเทคโนโลยีสารสนเทศ (Information Technology)</li>
            <li>สาขาการตลาด (Marketing)</li>
            <li>สาขาการท่องเที่ยว (Tourism)</li>
            <li>สาขางานยานยนต์ไฟฟ้า (Electric Vehicle)</li>
            <li>สาขางานอิเล็กทรอนิกส์ (Electronics Technology)</li>
            <li>สาขาสถาปัตยกรรม (Architectural Technology)</li>
            <li>สาขาการบัญชี (Accounting)</li>
            <li>สาขาธุรกิจดิจิทัล (Digital Business Technology)</li>
            <li>สาขาการโรงแรม (Hotel Management)</li>
          </ul>
        </div>
        {/* คุณสมบัติผู้สมัคร */}
        <div className="application-criteria">
          <h2>คุณสมบัติผู้สมัคร</h2>
          <p>หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) รับผู้จบ ม.3 หรือเทียบเท่า</p>
          <button className="apply-button">สมัครเลย</button>
        </div>
        {/* เอกสารการสมัคร */}
        <div className="application-documents">
          <h2>เอกสารการสมัคร</h2>
          <ul>
            <li>ใบ ปพ.1 ฉบับจริงพร้อมสำเนา <span className="required">(นำมาให้ภายหลังได้)</span></li>
            <li>ใบรับรอง <span className="required">(นำมาให้ภายหลังได้)</span></li>
            <li>สำเนาทะเบียนบ้าน <span className="required">นักเรียน, บิดา, มารดา</span></li>
            <li>สำเนาบัตรประชาชน <span className="required">นักเรียน, บิดา, มารดา</span></li>
            <li>สำเนาสูติบัตร</li>
            <li>รูปถ่ายขนาด 1 หรือ 2 นิ้ว</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
