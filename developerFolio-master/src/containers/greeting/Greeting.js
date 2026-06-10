import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
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
              
              {/* BUTTON ZONE: KINI HANYA BUTANG RESUME TUNGGAL YANG KEMAS */}
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`} // FIX: Menarik terus fail resume dari folder public (Gerenti Boleh Baca!)
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
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