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
          <Image src="/cropion-logo.svg" alt="Cropion Logo" width={160} height={50} />
        </div>

          {/* CTA Button */}
          <div className={styles.navActions}>
            <button className={styles.ctaButton}>Get Early Access</button>
          </div>

        </div>
      </header>

      {/* --------------------- Hero Section --------------------- */}
      <section className={styles.hero}>
        
        <div className={styles.heroContent}>

          {/* Main Heading */}
          <h1>Revolutionizing Farming with AI</h1>

          {/* Subtext */}
          <p>Cropion Rover — Your AI-Powered Farming Assistant</p>

          {/* Quick Elevator Pitch */}
          <p className={styles.elevator}>
            Empowering farmers with precision, simplicity, and sustainability.
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroActions}>
            <button className={styles.ctaButton}>Fund Us</button>
            <button className={styles.secondaryButton}>Join Our Team</button>
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
            <p>From soil analysis to smart irrigation suggestions, your farm&apos;s 24/7 companion.</p>
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

      {/* --------------------- Why It Matters --------------------- */}
      <section className={styles.matters} id="why">
        
        <h2>Why It Matters</h2>
        
        <p className={styles.mattersSubtext}>
          The future of food depends on innovation. With rising labor shortages, unpredictable climates, and the need for sustainable agriculture — Cropion Rover steps in to empower every farmer.
        </p>

        <div className={styles.mattersGrid}>

          <div className={styles.matterItem}>
            <h3>🌍 Global Food Security</h3>
            <p>Helping farmers maximize yield, reduce waste, and meet global food demands.</p>
          </div>

          <div className={styles.matterItem}>
            <h3>🌾 Sustainable Farming</h3>
            <p>Reducing chemical use, promoting efficient resource management, and preserving ecosystems.</p>
          </div>

          <div className={styles.matterItem}>
            <h3>🤖 Tech for All</h3>
            <p>Making AI-driven farming tools accessible and affordable to farmers everywhere.</p>
          </div>

        </div>

      </section>
      {/* --------------------- Support Our Vision --------------------- */}
      <section className={styles.support} id="support">
        
        <h2>Support Our Vision</h2>
        
        <p className={styles.supportSubtext}>
          We’re on a mission to make smart, AI-powered farming accessible to every corner of the world. Your support fuels this vision — together, we can revolutionize agriculture.
        </p>

        <div className={styles.supportActions}>
          <button className={styles.ctaButton}>Invest in Cropion</button>
          <button className={styles.secondaryButton}>Get in Touch</button>
        </div>

      </section>
      {/* --------------------- Gallery --------------------- */}
      <section className={styles.gallery} id="gallery">
        
        <h2>Gallery</h2>
        
        <p className={styles.gallerySubtext}>
          A glimpse into our journey — from prototypes to field tests. Stay tuned for more!
        </p>

        <div className={styles.galleryGrid}>
          
          <div className={styles.galleryItem}>
            <Image src="/gallery1.jpg" alt="Prototype Testing" width={300} height={200} />
          </div>

          <div className={styles.galleryItem}>
            <Image src="/gallery2.jpg" alt="Field Trials" width={300} height={200} />
          </div>

          <div className={styles.galleryItem}>
            <Image src="/gallery3.jpg" alt="Team Behind the Scenes" width={300} height={200} />
          </div>

          {/* Add more images as your project develops */}

        </div>

      </section>

      {/* --------------------- Stay in Touch --------------------- */}
      <footer className={styles.footer} id="stayintouch">
        
        <div className={styles.footerContent}>
          
          <h2>Stay in Touch</h2>
          
          <p>Follow our journey, get updates, and be part of the future of farming innovation.</p>
          
          <div className={styles.socialLinks}>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Instagram</a>
          </div>

          <p className={styles.copy}>© 2025 Cropion. All rights reserved.</p>
        
        </div>

      </footer>

    </div>
  );
}