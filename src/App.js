import React from 'react';
import './App.css';
import Navbar from './components/Navbar';  // นำเข้า Navbar
import Header from './components/Header';  // นำเข้า Header
import About from './pages/About';        // นำเข้า About

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar /> <About />
     
      {/* Header พร้อมวิดีโอ */}
      <Header />
 
      {/* เนื้อหาอื่น */}
      <section className="content-section">
        <h1>เมนูอื่นๆ</h1>
        <p>นี่คือเนื้อหาเพิ่มเติมที่คุณสามารถเลื่อนไปดูได้หลังจากวิดีโอ</p>
      </section>

      {/* เพิ่มหน้า About */}
      {/* เพิ่ม About ที่นี่ */}
    </div>
  );
}

export default App;
