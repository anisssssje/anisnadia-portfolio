import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="5px">
      {/* ID footer-info dipasang sebagai sauh untuk butang contact me */}
      <div className="footer-div" id="footer-info">
        
        {/* INFO LIST YANG USER-FRIENDLY & BERSIH */}
        <div className="footer-contact-row">
          <span>📧 anisnadia238@gmail.com</span>
          <span className="footer-pipe">|</span>
          <span>📞 +6017-2606 507</span>
          <span className="footer-pipe">|</span>
          <span>📍 Selangor, Malaysia</span>
        </div>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2026 Anis Nadia. All Rights Reserved.
        </p>
      </div>
    </Fade>
  );
}