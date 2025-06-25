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
        <div className={styles.heroOverlay}>
          <h1>Meet Cropion Rover</h1>
          <p>Your AI-Powered Farming Assistant</p>
          <button className={styles.ctaButton}>See it in Action</button>
        </div>
      </section>

      {/* --------------------- Features Section --------------------- */}
      <section className={styles.features} id="features">
        <h2>Why Choose Cropion Rover?</h2>
        <div className={styles.featureGrid}>
          
          <div className={styles.featureItem}>
            <h3>AI-Powered Weed Detection</h3>
            <p>Automatically detects and eliminates weeds with precision, boosting your yield.</p>
          </div>

          <div className={styles.featureItem}>
            <h3>Beginner Friendly</h3>
            <p>No farming expertise required. Anyone can operate Cropion Rover with ease.</p>
          </div>

          <div className={styles.featureItem}>
            <h3>Complete Farming Assistant</h3>
            <p>From soil analysis to smart irrigation suggestions, your farm&apos;s 24/7 companion.</p>
          </div>

        </div>
      </section>

      {/* --------------------- For Farmers Section --------------------- */}
      <section className={styles.farmers} id="farmers">
        <div className={styles.farmersContent}>
          <h2>Empowering Every Farmer</h2>
          <p>Cropion Rover is designed for all — from small landholders to large-scale farms. Affordable, reliable, and smart — making farming simple for everyone.</p>
          <button className={styles.ctaButton}>See How It Works</button>
        </div>
      </section>

      {/* --------------------- Contact Section --------------------- */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactContent}>
          <h2>Get in Touch</h2>
          <p>Have questions? Want to partner with us? Drop your message below and we&apos;ll get back to you.</p>

          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className={styles.ctaButton}>Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
}
