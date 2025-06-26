"use client";

import "./globals.css";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "./Logo";

export default function Home() {
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [volunteering, setVolunteering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "With Cropion Rover, my weeding work reduced by half. Even my son operates it now!",
      name: "Ramesh, Thanjavur",
    },
    {
      text: "I never thought AI could be this simple. Cropion made my farm smarter without stress.",
      name: "Selvi, Madurai",
    },
    {
      text: "The soil insights saved me time and money. Every farmer in my village is asking about it.",
      name: "Arun, Salem",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fadeRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeVisible);
          } else {
            entry.target.classList.remove(styles.fadeVisible);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.navContent}>
          <Logo />
          <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>Support Us</button>
        </div>
      </header>

      <section className={`${styles.hero} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[0] = el}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Revolutionizing Farming with AI</h1>
          <p className={styles.heroSubtitle}>Cropion Rover — Your AI-Powered Farming Assistant</p>
          <p className={styles.elevator}>Empowering farmers with precision, simplicity, and sustainability.</p>
          <div>
            <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>Support Us</button>
            <button className={styles.secondaryButton} onClick={() => setShowTeamPopup(true)}>Join Our Team</button>
          </div>
        </div>
      </section>

      <section className={`${styles.leftSection} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[1] = el}>
        <div className={styles.leftContent}>
          <h2 className={styles.sectionTitle}>What We’re Building</h2>
          <p className={styles.subtext}>Cropion Rover simplifies farming with AI — no expertise needed. Detect weeds in real-time, get smart insights, accessible to all farmers. 🚀</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[2] = el}>
        <h2 className={styles.sectionTitle}>In Progress</h2>
        <p className={styles.subtext}>We’re building Cropion Rover with AI precision, simplicity, and real-world testing.</p>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[3] = el}>
        <h2 className={styles.sectionTitle}>What Farmers Say</h2>
        <p className={styles.subtext}>Real stories from the fields — how Cropion Rover is changing lives.</p>
        <div className={`${styles.testimonialCard} ${styles.fadeIn}`}>
          <p className={styles.testimonialText}>“{testimonials[currentIndex].text}”</p>
          <h4 className={styles.testimonialName}>— {testimonials[currentIndex].name}</h4>
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, idx) => (
            <span key={idx} className={`${styles.dot} ${currentIndex === idx ? styles.active : ""}`} onClick={() => setCurrentIndex(idx)}></span>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[4] = el}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <p className={styles.subtext}>A glimpse into our journey — prototypes, field tests & more.</p>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}><Image src="/gallery1.jpg" alt="Prototype Testing" width={300} height={200} /></div>
          <div className={styles.galleryItem}><Image src="/gallery2.jpg" alt="Field Trials" width={300} height={200} /></div>
          <div className={styles.galleryItem}><Image src="/gallery3.jpg" alt="Behind the Scenes" width={300} height={200} /></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[5] = el}>
        <h2 className={styles.sectionTitle}>Why It Matters</h2>
        <p className={styles.subtext}>The future of food depends on innovation. Cropion Rover helps farmers overcome challenges with AI-driven tools.</p>
        <div className={styles.whyGrid}>
          <div className={styles.whyItem}><div className={styles.whyIcon}>🌍</div><div><h3>Global Food Security</h3><p>Helping farmers maximize yield, reduce waste, and meet global demand.</p></div></div>
          <div className={styles.whyItem}><div className={styles.whyIcon}>🌾</div><div><h3>Sustainable Farming</h3><p>Efficient resource use, lower chemicals, protect ecosystems.</p></div></div>
          <div className={styles.whyItem}><div className={styles.whyIcon}>🤖</div><div><h3>Tech for All</h3><p>Accessible, simple AI tools for every farmer, everywhere.</p></div></div>
        </div>
      </section>

      <footer className={styles.footer}><div className={styles.footerContent}><Logo invert width={120} height={35} /></div></footer>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={`${styles.popupLarge} ${styles.fadeIn}`}>
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>×</button>
            <h2>Support Cropion</h2>
            <form className={styles.popupForm} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number (Optional)" />
              <label>How would you like to support?</label>
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" /> Donate</label>
                <label><input type="checkbox" onChange={(e) => setVolunteering(e.target.checked)} /> Volunteer</label>
                <label><input type="checkbox" /> Collaborate as Partner</label>
                <label><input type="checkbox" /> Offer Technical Expertise</label>
                <label><input type="checkbox" /> Other</label>
              </div>
              {volunteering && (
                <><label>Availability:</label><input type="text" placeholder="Days Available" /><input type="number" placeholder="Hours per Week" /></>
              )}
              <textarea placeholder="Tell us why you're interested" rows={3}></textarea>
              <label>Preferred Contact:</label>
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" /> Email</label>
                <label><input type="checkbox" /> Phone</label>
                <label><input type="checkbox" /> WhatsApp</label>
              </div>
              <input type="text" placeholder="City, State, Country" />
              <label>Attach Resume:</label>
              <label className={styles.fileLabel}><input type="file" hidden />📎 Upload File</label>
              <label>How did you hear about us?</label>
              <select><option value="">Select</option><option>Social Media</option><option>Word of Mouth</option><option>News/Blog</option><option>Other</option></select>
              <div className={styles.popupActions}>
                <button className={styles.ctaButton}>Submit</button>
                <button className={styles.secondaryButton} onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showTeamPopup && (
        <div className={styles.popupOverlay}>
          <div className={`${styles.popupLarge} ${styles.fadeIn}`}>
            <button className={styles.closeBtn} onClick={() => setShowTeamPopup(false)}>×</button>
            <h2>Join Our Team</h2>
            <form className={styles.popupForm} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number (Optional)" />
              <label>Your Area of Interest:</label>
              <select required><option value="">Select Role</option><option>Engineering/AI</option><option>Design & UI/UX</option><option>Marketing</option><option>Field Ops</option><option>Other</option></select>
              <textarea placeholder="Why do you want to join Cropion?" rows={3} required></textarea>
              <label>Attach Resume:</label>
              <label className={styles.fileLabel}><input type="file" hidden />📎 Upload File</label>
              <div className={styles.popupActions}>
                <button className={styles.ctaButton}>Submit</button>
                <button className={styles.secondaryButton} onClick={() => setShowTeamPopup(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
