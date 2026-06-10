/* ========================================================================
  DEVELOPER FOLIO CONFIGURATION - ANIS NADIA (FINAL DESIGN COMPLIANT)
  Theme: Cyber Security & Network Defense (Professional Light/Teal Theme)
  ========================================================================
*/

// Set to true to show splash screen animation on load
const splashScreen = {
  enabled: true,
  title: "Anis Nadia | Digital Portfolio",
  duration: 1500
};

// GREETING SECTION (Cerah, Professional Introduction)
const greeting = {
  username: "Anis Nadia",
  title: "ANIS NADIA BINTI MUHAMAD ZAMRIN",
  subTitle: "A first-class Bachelor of Computer Science (Computer Network Security) student with a solid background in Cyber Forensics. Passionate about network defense, proactive threat hunting, and technical automation, dedicated to safeguarding enterprise digital assets.",
  resumeLink: "https://drive.google.com/file/d/1_EsmyU3yCmFBumFxLD1uQsYOttMdh6Kn/view?usp=sharing", // Hidupkan butang resume
  displayGreeting: true 
};

// SOCIAL MEDIA LINKS
const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  gmail: "anisnadia@example.com",
  gitlab: "",
  facebook: ""
};

// SEKSYEN 1: CAREER EXPLORATION & UNDERSTANDING (Menu: "What I Do")
const skillsSection = {
  title: "Career Exploration",
  subTitle: "TARGET ROLE: SECURITY OPERATIONS CENTER (SOC) ANALYST",
  skills: [
    "⚡ Core Responsibilities: Continuous monitoring of SIEM alerts, active log triage, network traffic analysis, and executing rapid incident containment protocols to mitigate threats[cite: 93, 95].",
    "⚡ Technical Expertise: Advanced packet analysis via Wireshark, script automation using Python, multi-platform administration (Linux/Windows), and proactive threat hunting[cite: 96, 97].",
    "⚡ Relevance to Modern Security: Serving as an organization's critical first line of defense to intercept ransomware and Advanced Persistent Threats (APTs) before data exfiltration happens[cite: 98]."
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Wireshark / Network Shield", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "Cisco Packet Tracer", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Database (MySQL)", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// SEKSYEN 2: SKILLS ASSESSMENT & GAP ANALYSIS (Menu: "Skills Assessment")
const techStack = {
  viewExperiences: true,
  experience: [
    { Stack: "Cyber Threat Hunting & Penetration Testing (Strength)", progressPercentage: "95%" },
    { Stack: "Network Routing & Switching Infrastructure (CCNA)", progressPercentage: "90%" },
    { Stack: "Digital Evidence Recovery & Incident Response", progressPercentage: "85%" },
    { Stack: "Enterprise SIEM Platforms (Splunk/QRadar - Target Gap)", progressPercentage: "70%" }
  ]
};

// SEKSYEN 3: INDUSTRIAL EXPERIENCE (Menu: "Experience")
const workExperiences = {
  display: true,
  experience: [
    {
      role: "IT Operations & Automation Intern", // Tukar Jawatan Rasmi
      company: "DYODD Sdn. Bhd.",
      companylogo: "https://via.placeholder.com/150", // Menyediakan placeholder logo (Bulatan Putih Bersih)
      date: "July 2022 - September 2022", // Tukar Timeline Sebenar
      desc: "Engineered high-efficiency workflow automation and reinforced operational data integrity.",
      descBullets: [
        "Engineered automated workflows and integrated Billplz payment gateways to streamline secure digital transactions.",
        "Optimized e-commerce synchronization between Facebook Shop and UChat platforms for efficient management.",
        "Conducted feature-gap analysis between automation tools to enhance system efficiency and workflow reliability.",
        "Applied logical structuring to automated flows to enforce data integrity and solid user authentication."
      ]
    }
  ]
};

// SEKSYEN 4: ACADEMIC PROJECTS (Menu: "Projects")
const openSource = {
  showGithubProfile: "false",
  display: true
};

const bigProjects = {
  title: "Academic & Core Capstone Projects",
  subtitle: "Tangible implementation of secure communication protocols and hardware integration",
  projects: [
    {
      title: "IoT-Based Smart Inhaler & Respiratory Training System",
      points: [
        "Architected an end-to-end telemetry hardware system capturing real-time respiratory health data.",
        "Engineered secure data transmission controls to prevent information tampering over public networks.",
        "Enforced cryptographic data integrity to protect sensitive user healthcare telemetry from unauthorized interception."
      ],
      image: "https://via.placeholder.com/600x350/0d9488/ffffff?text=IoT+Inhaler+Dashboard+Exhibit"
    },
    {
      title: "Secure Image Steganography using Hybrid Cryptographic Algorithms",
      points: [
        "Developed a high-security data-hiding algorithm integrating Two's Complement, Dual Bit Addition, and Pseudo-Random Number Generators (PRNG).",
        "Focused on maximizing data embedding capacity while preserving absolute statistical invisibility within digital images.",
        "Optimized with a 16-bit End of Bit (EOB) technique to guarantee rapid, robust data extraction and exceptionally low bit error rates."
      ],
      image: "https://via.placeholder.com/600x350/0d9488/ffffff?text=PSNR+Performance+Metrics+Graph"
    },
    {
      title: "Enterprise Vulnerability Diagnostics & Traffic Analysis",
      points: [
        "Executed hands-on web application penetration testing using Burp Suite (Intruder, Decoder) to audit JWT predictability, username enumeration, and XSS filters.",
        "Conducted deep network-layer packet analysis via Wireshark to intercept and dissect unencrypted plain-text credentials over FTP and HTTP.",
        "Simulated automated backend exploits, user credential updates, and table creation using active SQL Injection (SQLi) deployment inside WebGoat environments."
      ],
      image: "https://via.placeholder.com/600x350/0d9488/ffffff?text=Burp+Suite+Interceptor+Log+Exhibit"
    }
  ],
  display: true
};

// SEKSYEN 5: CERTIFICATIONS & TRAINING (Menu: "Certifications")
const achievementSection = {
  title: "Certifications & Professional Trainings",
  subtitle: "Professional validation and academic achievements in security operations.",
  achievementsCards: [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      tag: "Cisco Verification",
      point: "Validates core competence in enterprise network architecture, secure routing deployment, and traffic flow optimization.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=Cisco+CCNA+Certificate+Preview" // Masukkan URL gambar/screenshot sijil hang kat sini nanti
    },
    {
      title: "Certified Information Systems Security Professional (CISSP) Foundation",
      tag: "HRD Corp Certified",
      point: "Demonstrates a profound understanding of global security governance, identity management, and proactive asset protection frameworks.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=CISSP+Foundation+Certificate"
    },
    {
      title: "Cyber Threat Hunting & Defensive Security Operations",
      tag: "HRD Corp Certified",
      point: "Covers live log triage, advanced malicious indicator detection, and rapid incident isolation methodologies across host environments.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=Threat+Hunting+Certificate"
    },
    {
      title: "Ethical Hacking & Vulnerability Assessment Track",
      tag: "Great Learning Academy",
      point: "Practical training in penetration testing execution, token predictability testing, cross-site scripting (XSS), and logic bypass.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=Ethical+Hacking+Certificate"
    },
    {
      title: "National Record: Most Participants in Virtual Coding Programme",
      tag: "UTM & MBOR Record",
      point: "Honored in the Malaysia Book of Records for competitive software integration and large-scale virtual coding script executions.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=Malaysia+Book+of+Records+Sijil"
    },
    {
      title: "Webinar Cybercrime: The Next Victim Analysis",
      tag: "UiTM Collaboration",
      point: "Academic exposure focusing on modern digital attack paths, data exfiltration patterns, and national cyber threats.",
      certImage: "https://via.placeholder.com/400x250/ffffff/0d9488?text=UiTM+Webinar+Certificate"
    }
  ],
  display: true
};

// SEKSYEN 6: PERSONAL REFLECTION & STRATEGIC ROADMAP (Menu: "Reflection")
const talkSection = {
  title: "Strategic Reflection",
  subtitle: "Target Focus: CyberSecurity Malaysia (CSM)",
  talks: [
    {
      title: "Why CyberSecurity Malaysia (CSM)?",
      points: [
        "Strategic Alignment: National-level agency that aligns perfectly with my career goal in digital forensics and core threat containment.",
        "Targeted Skills: My technical capabilities directly match CSM’s active incident handling and enterprise network logging needs.",
        "Hybrid Foundation: My academic path seamlessly combines a Cyber Forensics background with a Network Security degree."
      ]
    },
    {
      title: "Core Strengths & Weaknesses",
      points: [
        "Core Strengths: High analytical drive (Degree CGPA 3.86 & Diploma CGPA 3.97) combined with proven leadership as 1st Vice President of MPP.",
        "Weakness: A tendency to over-analyze complex cryptography or code anomalies during initial diagnostic phases.",
        "Mitigation: Actively managed by deploying structured automation scripts and strict time-tracking deadlines to guarantee efficiency."
      ]
    },
    {
      title: "Value Proposition & Why Hire Me",
      points: [
        "Operational Value: Industry-primed mindset backed by 6 professional certifications, including CCNA, Threat Hunting, and CISSP foundations.",
        "Practical Experience: Proven ability to build automated system workflows and enforce strict data integrity during my internship at DYODD Sdn. Bhd.",
        "Ultimate USP: Ready for immediate deployment into operational teams without requiring fundamental IT or network retraining."
      ]
    }
  ],
  display: true
};

// CONTACT INFO SECTION (Menu: "Contact")
const contactInfo = {
  title: "Secure Communication ☎️",
  subtitle: "Let's establish a secure handshake. Reach out for deployment opportunities.",
  number: "+6012-3456789", // Tukar nombor telefon hang
  email_address: "anisnadia@example.com"
};

// FIX FOR BLOG COMPONENT MAPPING ERROR
const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [], 
  display: false 
};

// SYSTEM PLUGINS & CONFIGURATION
const isHireable = true;
const twitterDetails = { userName: "" };
const resumeSection = { display: false };
const podcastSection = { display: false };
const illustration = { animated: true }; // Mengaktifkan animasi rangkaian selamat di halaman utama
const educationInfo = { display: false };

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  isHireable,
  twitterDetails,
  resumeSection,
  podcastSection,
  illustration,
  splashScreen,
  educationInfo
};