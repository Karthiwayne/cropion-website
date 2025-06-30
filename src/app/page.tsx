"use client";

import "./globals.css";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "./Logo";
import { submitContactForm } from "./strapi";
import AgriField3D from "./AgriField3D"

export default function Home() {
  const [sectionIndex, setSectionIndex] = useState(0);

  // track camera mode for slide index
  useEffect(() => {
    if (sectionIndex === 1) {
      setCameraMode("followRover");
    } else {
      setCameraMode("angled");
    }
  }, [sectionIndex]);

  // update sectionIndex based on user scroll
  useEffect(() => {
    let ticking = false;
    const handleWheel = (e) => {
      if (ticking) return;
      ticking = true;
      if (e.deltaY > 0 && sectionIndex < 5) {
        setSectionIndex(i => i + 1);
      } else if (e.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex(i => i - 1);
      }
      setTimeout(() => ticking = false, 300); // Reduced scroll block for snappier feel
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [sectionIndex]);

  // Section transition fade animation
  useEffect(() => {
    const c = document.querySelectorAll('.section-fade');
    c.forEach((el, idx) => {
      if (idx === sectionIndex) {
        el.classList.add('visible-fade');
      } else {
        el.classList.remove('visible-fade');
      }
    });
  }, [sectionIndex]);
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Navbar scroll effect
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section scroll -> camera mode state
  const [cameraMode, setCameraMode] = useState("angled");

  // Intersection ref for the after-hero section
  const aboutRef = useRef(null);
  useEffect(() => {
    const handler = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCameraMode("front");
        } else {
          setCameraMode("angled");
        }
      });
    };
    const observer = new window.IntersectionObserver(handler, { threshold: 0.36 });
    const elem = aboutRef.current;
    if (elem) observer.observe(elem);
    return () => { if (elem) observer.unobserve(elem); };
  }, []);

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
  }, [testimonials.length]);

  const fadeRefs = useRef<(HTMLElement | null)[]>([]);
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

  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Section refs for scroll-jack
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  // 0: hero, 1: about, 2: progress, 3: testimonials, 4: gallery, 5: why

  return (
    <div className={styles.mainScroll}>
      <header className={styles.navbar + (navbarScrolled ? " " + styles.scrolled : "")}>
        <div className={styles.navContent}>
          <Logo />
          <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>
            Sprout a Chat
          </button>
        </div>
      </header>

      <section className={`${styles.hero}`} >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Revolutionizing Farming with AI</h1>
          <p className={styles.heroSubtitle}>Cropion Robot — Your AI-Powered Farming Assistant</p>
          <p className={styles.elevator}>Empowering farmers with precision, simplicity, and sustainability.</p>
          <div>
            <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>Contact Us</button>
          </div>
        </div>
        <AgriField3D cameraMode={cameraMode} />
        <div className={styles.heroBackgroundOverlay} />
      </section>

      <section className={`${styles.section}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>What We are Building</h2>
          <p className={styles.subtext}>
            Cropion Rover simplifies farming with AI — no expertise needed. Detect weeds in real-time, get smart insights, accessible to all farmers. 🚀
            <br /><br />
            &emsp;👩🏽‍🌾 First time touching soil? You are still good — we gotchu.
            <br />
            &emsp;🤖 The Rover does the thinking, you just vibe and grow.
            <br />
            &emsp;🌿 Spot weeds, pests, and problems before they mess you up.
            <br />
            &emsp;💡 Smart tips, real-time alerts, zero stress.
            <br />
            &emsp;🌍 Farming is not gotta be complicated — we are making it easy for literally everyone.
          </p>
        </div>
      </section>

      <section className={`${styles.section}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>In Progress</h2>
          <p className={styles.subtext}>
            We are building Cropion Rover with AI precision, simplicity, and real-world testing.
          </p>

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timeline}>

              <div className={`${styles.timelineStep} ${styles.completed}`}>
                <div className={styles.timelineDot}>✓</div>
                <h3>Research & Planning</h3>
                <p>Market analysis and technical planning completed</p>
              </div>

              <div className={`${styles.timelineStep} ${styles.ongoing}`}>
                <div className={styles.timelineDot}>⚡</div>
                <h3>Prototype Development</h3>
                <p>AI models and hardware prototypes being built</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineDot}>3</div>
                <h3>Field Testing</h3>
                <p>Testing with farmers in real-world conditions</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineDot}>4</div>
                <h3>Launch</h3>
                <p>Market launch and scaling planned</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className={`${styles.section} `} >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>What Farmers Say</h2>
          <p className={styles.subtext}>Real stories from the fields — how Cropion Rover is changing lives.</p>
          <div className={`${styles.testimonialCard} ${styles.fadeIn}`}>
            <p className={styles.testimonialText}>&quot{testimonials[currentIndex].text}&quot</p>
            <h4 className={styles.testimonialName}>— {testimonials[currentIndex].name}</h4>
          </div>
          <div className={styles.dots}>
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${currentIndex === idx ? styles.active : ""}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <p className={styles.subtext}>A glimpse into our journey — prototypes, field tests & more.</p>

          <div className={styles.galleryWrapper}>
            <div className={styles.galleryTrack} ref={galleryRef}>

              <div className={styles.galleryItem}>
                <Image src="/gallery-1.jpg" alt="Prototype Testing" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-2.jpg" alt="Field Trials" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-3.jpg" alt="Behind the Scenes" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-4.jpg" alt="Behind the Scenes" width={400} height={300} />
              </div>

              {/* Duplicate for infinite loop feel */}
              <div className={styles.galleryItem}>
                <Image src="/gallery-1.jpg" alt="Prototype Testing" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-2.jpg" alt="Field Trials" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-3.jpg" alt="Behind the Scenes" width={400} height={300} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/gallery-4.jpg" alt="Behind the Scenes" width={400} height={300} />
              </div>

            </div>
          </div>

        </div>
      </section>


      <section className={`${styles.section}`} >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Why It Matters</h2>
          <p className={styles.subtext}>
            The future of food depends on innovation. Cropion Rover helps farmers overcome challenges with AI-driven tools.
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🌍</div>
              <div className={styles.whyContent}>
                <h3>Global Food Security</h3>
                <p>Helping farmers maximize yield, reduce waste, and meet global demand.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🌾</div>
              <div className={styles.whyContent}>
                <h3>Sustainable Farming</h3>
                <p>Efficient resource use, lower chemicals, protect ecosystems.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🤖</div>
              <div className={styles.whyContent}>
                <h3>Tech for All</h3>
                <p>Accessible, simple AI tools for every farmer, everywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Logo invert width={120} height={35} />
        </div>
      </footer>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popupLarge} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>×</button>
            <h2>Your interest means the world to us</h2>
            <form
              className={styles.popupForm}
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setError("");
                setSuccess(false);
                try {
                  await submitContactForm({
                    fullName: fullName.trim(),
                    email: email.trim(),
                    phoneNumber: phoneNumber.trim(),
                    message,
                    source
                  });
                  setSuccess(true);
                  setFullName("");
                  setEmail("");
                  setPhoneNumber("");
                  setMessage("");
                  setSource("");
                } catch (err) {
                  console.error(err);
                  setError("Something went wrong! Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <textarea
                placeholder="Have something you like to share? We re all ears — or feel free to skip it!"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* <label>How did you hear about us?</label>
              <select value={source} onChange={e => setSource(e.target.value)}>
                <option value="">Select</option>
                <option value="social">Social Media</option>
                <option value="word">Word of Mouth</option>
                <option value="news">News / Blog</option>
                <option value="other">Other</option>
              </select> */}

              {error && <div style={{ color: "#c00", marginTop: 4 }}>{error}</div>}
              {success && <div style={{ color: "#0ab772", marginTop: 4 }}>Thank you – we received your message!</div>}

              <div className={styles.popupActions}>
                <button type="submit" className={styles.ctaButton} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button type="button" className={styles.secondaryButton} onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}