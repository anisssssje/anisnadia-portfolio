import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  return (
    <div className={isDark ? "experience-card-dark central-card" : "central-card"}>
      
      {/* HEADER KAD BERWARNA TURQUOISE PUDAR ELEGAN */}
      <div className="central-card-header">
        {/* FIX VISUAL: Nama syarikat diposisikan tinggi sikit supaya tidak dilanggar logo */}
        <h4 className="central-company-name">{cardInfo.company}</h4>
      </div>

      {/* BULATAN LOGO SYARIKAT DI TENGAH (DIVIDED SEGMENT) */}
      <div className="central-logo-container">
        <div className="central-logo-circle">
          {/* Sisa bulatan putih yang smart sebagai identiti syarikat */}
          <div className="central-inner-avatar"></div>
        </div>
      </div>

      {/* KANDUNGAN UTAMA MAKLUMAT RESUME */}
      <div className="central-card-body">
        <h3 className={isDark ? "central-role-dark" : "central-role"}>{cardInfo.role}</h3>
        <span className="central-duration">{cardInfo.date}</span>
        
        <p className={isDark ? "central-desc-dark" : "central-desc"}>{cardInfo.desc}</p>
        
        <ul className="central-bullet-list">
          {cardInfo.descBullets ? cardInfo.descBullets.map((bullet, i) => (
            <li key={i} className={isDark ? "dark-bullet" : ""}>
              {bullet}
            </li>
          )) : null}
        </ul>

        {/* 🖼️ ZON BUTAN GAMBAR PROJEK INTERN (READY-TO-USE) */}
        {/* Bila hang dah bersedia nak letak gambar, hang cuma perlu letak URL gambar kat portfolio.js. Kotak gambar bawah ni akan keluar automatik dengan susunan tengah yang sangat kemas! */}
        {cardInfo.projectImage && (
          <div className="internship-project-gallery">
            <img 
              src={cardInfo.projectImage} 
              alt="Internship Evidence" 
              className="intern-proof-img"
            />
            <span className="image-caption">Figure 1: IT Operations Deployment & Automation Workflow Exhibit</span>
          </div>
        )}

      </div>
    </div>
  );
}