import Image from "next/image";
import styles from "./page.module.css";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div>

      {/* --------------------- Navbar --------------------- */}
      <header className={styles.navbar}>
        <div className={styles.navContent}>

        <Logo />

          <div>
            <button className={styles.ctaButton}>Get Early Access</button>
          </div>

        </div>
      </header>

      {/* --------------------- Hero --------------------- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Revolutionizing Farming with AI</h1>
          <p className={styles.heroSubtitle}>Cropion Rover — Your AI-Powered Farming Assistant</p>
          <p className={styles.elevator}>Empowering farmers with precision, simplicity, and sustainability.</p>

          <div>
            <button className={styles.ctaButton}>Fund Us</button>
            <button className={styles.secondaryButton}>Join Our Team</button>
          </div>
        </div>
      </section>

      {/* --------------------- Building Section --------------------- */}
      <section className={styles.section} id="about">
        <h2 className={styles.sectionTitle}>What We’re Building</h2>
        <p className={styles.subtext}>
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
            <p>From soil analysis to smart irrigation suggestions, your farm's 24/7 companion.</p>
          </div>
        </div>
      </section>

      {/* --------------------- Progress Section --------------------- */}
      <section className={styles.section} id="progress">
        <h2 className={styles.sectionTitle}>In Progress</h2>
        <p className={styles.subtext}>
          We are actively developing Cropion Rover with a focus on AI precision, simplicity, and real-world testing.
        </p>

        <div className={styles.progressTimeline}>
          <div className={styles.progressItem}>
            <span className={styles.progressBadge}>✔</span>
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
      <section className={styles.section} id="join">
        <h2 className={styles.sectionTitle}>Join Us</h2>
        <p className={styles.subtext}>
          We're building the future of farming, and we can’t do it alone. If you’re passionate about agri-tech, AI, or supporting sustainable solutions — let’s connect.
        </p>

        <div>
          <button className={styles.secondaryButton}>Collaborate</button>
        </div>
      </section>

      {/* --------------------- Why It Matters --------------------- */}
      <section className={styles.section} id="why">
        <h2 className={styles.sectionTitle}>Why It Matters</h2>
        <p className={styles.subtext}>
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

      {/* --------------------- Support --------------------- */}
      <section className={styles.section} id="support">
        <h2 className={styles.sectionTitle}>Support Our Vision</h2>
        <p className={styles.subtext}>
          We’re on a mission to make smart, AI-powered farming accessible to every corner of the world. Your support fuels this vision — together, we can revolutionize agriculture.
        </p>

        <div>
          <button className={styles.secondaryButton}>Get in Touch</button>
        </div>
      </section>

      {/* --------------------- Gallery --------------------- */}
      <section className={styles.section} id="gallery">
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <p className={styles.subtext}>
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
        </div>
      </section>

      {/* --------------------- Footer --------------------- */}
      <footer className={styles.footer} id="stayintouch">
        <Logo invert width={140} height={40} />
        <h2 className={styles.sectionTitle}>Stay in Touch</h2>
        <p className={styles.subtext}>
          Follow our journey, get updates, and be part of the future of farming innovation.
        </p>

        <div className={styles.socialLinks}>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>

        <p className={styles.copy}>© 2025 Cropion. All rights reserved.</p>
      </footer>

    </div>
  );
}
