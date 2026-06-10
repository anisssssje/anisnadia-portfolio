import React, { useContext } from "react";
import "./WorkExperience.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Import 3 imej rasmi dari folder assets laptop hang
import dyoddLogo from "../../assets/images/dyodd-logo.png";
import workspaceImg from "../../assets/images/dyodd-workspace.png";
import receiptImg from "../../assets/images/billplz-receipt.png";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="work-experience-main" id="experience">
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA AUTO LIGHT/DARK MODE */}
        <div className="experience-header-area">
          <h1 className={isDark ? "dark-mode experience-heading" : "experience-heading"}>
            Industrial Experience
          </h1>
        </div>

        {/* KAD PENGALAMAN PREMIUM */}
        <div className={isDark ? "experience-premium-card dark" : "experience-premium-card"}>
          <div className="card-top-teal-bar"></div>

          <div className="card-main-body">
            
            {/* KEPALA KAD: NAMA SYARIKAT & LOGO BESAR */}
            <div className="company-branding-row">
              <h2 className="company-name-text">DYODD Sdn. Bhd.</h2>
              
              {/* FIX: Saiz bulatan logo akan dibesarkan melalui CSS */}
              <div className="company-logo-avatar-circle-lg">
                <img src={dyoddLogo} alt="DYODD Logo" className="avatar-img-element" />
              </div>
            </div>

            {/* JAWATAN & TIMELINE */}
            <div className="job-meta-center">
              <h3 className={isDark ? "dark-text job-title" : "job-title"}>IT Operations & Automation Intern</h3>
              <span className="job-duration-timeline">July 2022 - September 2022</span>
              
              <p className={isDark ? "dark-sub job-summary-p" : "job-summary-p"}>
                Engineered high-efficiency workflow automation and reinforced operational data integrity.
              </p>
            </div>

            <div className="card-divider-line"></div>

            {/* 4 BULLET POINTS UTAMA */}
            <ul className="experience-bullet-points-list">
              <li className={isDark ? "dark-point" : ""}>
                Engineered automated workflows and integrated Billplz payment gateways to streamline secure digital transactions.
              </li>
              <li className={isDark ? "dark-point" : ""}>
                Optimized e-commerce synchronization between Facebook Shop and UChat platforms for efficient management.
              </li>
              <li className={isDark ? "dark-point" : ""}>
                Conducted feature-gap analysis between automation tools to enhance system efficiency and workflow reliability.
              </li>
              <li className={isDark ? "dark-point" : ""}>
                Applied logical structuring to automated flows to enforce data integrity and solid user authentication.
              </li>
            </ul>

            {/* GALERI EXHIBITS (FIX: BERSIH TANPA TEKS APPENDIX / FIGURE) */}
            <div className="experience-exhibit-section">
              <h4 className="exhibit-section-title">📂 Industrial Attachment Exhibits</h4>
              
              <div className="exhibit-images-grid">
                {/* Gambar 1: Ruang Pejabat */}
                <div className="exhibit-media-box">
                  <img src={workspaceImg} alt="Company Workspace" className="exhibit-img-large" />
                  <span className="exhibit-caption">Company Office Workspace</span>
                </div>

                {/* Gambar 2: Resit Billplz */}
                <div className="exhibit-media-box">
                  <img src={receiptImg} alt="Billplz Payment Gateway" className="exhibit-img-large" />
                  <span className="exhibit-caption">FinTech Billplz Payment Gateway Integration</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Fade>
    </div>
  );
}