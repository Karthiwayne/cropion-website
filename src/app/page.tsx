import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* --------------------- Navbar --------------------- */}
      <header className={styles.navbar}>
        <div className={styles.navContent}>

          {/* Logo */}
          <div className={styles.logoSection}>
            <Image src="/cropion-logo.svg" alt="Cropion Logo" width={120} height={40} />
          </div>

          {/* Navigation Links */}
          <nav className={styles.navMenu}>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#farmers">For Farmers</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className={styles.navActions}>
            <button className={styles.ctaButton}>Get Early Access</button>
          </div>

        </div>
      </header>

      {/* --------------------- Hero Section --------------------- */}
      <section className={styles.hero}>
        
        <div className={styles.heroContent}>

          {/* Optional Tagline */}
          <span className={styles.tagline}>Prototype in Development</span>

          {/* Main Heading */}
          <h1>Revolutionizing Farming with AI</h1>

          {/* Subtext */}
          <p>Cropion Rover — Your AI-Powered Farming Assistant</p>

          {/* Quick Elevator Pitch */}
          <p className={styles.elevator}>Empowering farmers with precision, simplicity, and sustainability.</p>

          {/* CTA Buttons */}
          <div className={styles.heroActions}>
            <button className={styles.ctaButton}>See Our Vision</button>
            <button className={styles.secondaryButton}>Get Early Access</button>
          </div>

        </div>

      </section>

      {/* --------------------- What We’re Building --------------------- */}
      <section className={styles.building} id="about">
        
        <h2>What We’re Building</h2>
        
        <p className={styles.buildingSubtext}>
          Cropion Rover is an AI-powered farming assistant designed to simplify agriculture for everyone. From weed detection to smart insights — no expertise needed.
        </p>

        <div className={styles.buildGrid}>
          
          <div className={styles.buildItem}>
            <h3>AI Weed Detection</h3>
            <p>Detects and eliminates weeds in real-time, increasing yield and reducing labor.</p>
          </div>

          <div className={styles.buildItem}>
            <h3>Beginner Friendly</h3>
            <p>Zero learning curve — designed for farmers of all experience levels.</p>
          </div>

          <div className={styles.buildItem}>
            <h3>Complete Farming Assistant</h3>
            <p>One device, multiple tasks — soil analysis, health monitoring, and more.</p>
          </div>

        </div>

      </section>

      {/* --------------------- In Progress --------------------- */}
      <section className={styles.progress} id="progress">
        
        <h2>In Progress</h2>
        
        <p className={styles.progressSubtext}>
          We are actively developing Cropion Rover with a focus on AI precision, simplicity, and real-world testing. Here's where we stand:
        </p>

        <div className={styles.progressTimeline}>

          <div className={styles.progressItem}>
            <span className={styles.progressBadge}>✓</span>
            <h3>Prototype Design Completed</h3>
            <p>Initial hardware and software prototypes are finalized for testing.</p>
          </div>

          <div className={styles.progressItem}>
            <span className={styles.progressBadge}>⏳</span>
            <h3>Field Trials Underway</h3>
            <p>Ongoing real-world trials to validate performance and reliability.</p>
          </div>

          <div className={styles.progressItem}>
            <span className={styles.progressBadge}>🚀</span>
            <h3>Preparing for Launch</h3>
            <p>Working towards scaling production and early adopter partnerships.</p>
          </div>

        </div>

      </section>

      {/* --------------------- Join Us --------------------- */}
      <section className={styles.join} id="join">
        
        <h2>Join Us</h2>
        
        <p className={styles.joinSubtext}>
          We're building the future of farming, and we can’t do it alone. If you’re passionate about agri-tech, AI, or supporting sustainable solutions — let’s connect.
        </p>

        <div className={styles.joinActions}>
          <button className={styles.ctaButton}>Partner with Us</button>
          <button className={styles.secondaryButton}>Collaborate</button>
        </div>

      </section>

      {/* --------------------- Footer Section --------------------- */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <Image src="/cropion-logo.svg" alt="Cropion Logo" width={120} height={40} />
          </div>
          <p>© 2024 Cropion. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}