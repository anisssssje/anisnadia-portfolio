import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImg from "../../assets/images/profile.png"; 

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          
          {/* BAHAGIAN KIRI: TEKS UTAMA RESUME HANG */}
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p"}>
                {greeting.subTitle}
              </p>
              
              <div id="resume" className="empty-div"></div>
              
              <SocialMedia />
              
              {/* BUTTON ZONE: MENGGUNAKAN TAG <a> STANDARD UNTUK LINK EXTERNAL GOOGLE DRIVE */}
              <div className="button-greeting-div" style={{ marginTop: "25px" }}>
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink} // Membaca terus link Google Drive dari portfolio.js!
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "13px 28px",
                      backgroundColor: "#0d9488", // Warna tema Teal Siber portfolio hang
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: "700",
                      borderRadius: "8px",
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 10px rgba(13, 148, 136, 0.3)",
                      transition: "all 0.2s ease-in-out"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#0f766e"} // Efek hover gelap sikit
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#0d9488"}
                  >
                    Download My Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* BAHAGIAN KANAN: GAMBAR PROFIL BESAR (430px) */}
          <div className="greeting-image-div">
            <div className="profile-image-container-xl">
              <img
                alt="Anis Nadia Graduation Portrait"
                src={profileImg}
                className="profile-img-xl"
              />
              <div className="profile-cyber-ring"></div>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}