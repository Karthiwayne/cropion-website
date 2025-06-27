"use client";

import "./globals.css";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "./Logo";
import { submitContactForm } from "./strapi";

export default function Home() {
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [volunteering, setVolunteering] = useState(false);
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

  const galleryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.navContent}>
          <Logo />
          <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>
            Sprout a Chat
          </button>
        </div>
      </header>

      <section className={`${styles.hero} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[0] = el}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Revolutionizing Farming with AI</h1>
          <p className={styles.heroSubtitle}>Cropion Robot — Your AI-Powered Farming Assistant</p>
          <p className={styles.elevator}>Empowering farmers with precision, simplicity, and sustainability.</p>
          <div>
            <button className={styles.ctaButton} onClick={() => setShowPopup(true)}>Contact Us</button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[1] = el}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>What We're Building</h2>
          <p className={styles.subtext}>
            Cropion Rover simplifies farming with AI — no expertise needed. Detect weeds in real-time, 
            get smart insights, accessible to all farmers. 🚀
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[2] = el}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>In Progress</h2>
          <p className={styles.subtext}>
            We're building Cropion Rover with AI precision, simplicity, and real-world testing.
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


      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[3] = el}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>What Farmers Say</h2>
          <p className={styles.subtext}>Real stories from the fields — how Cropion Rover is changing lives.</p>
          <div className={`${styles.testimonialCard} ${styles.fadeIn}`}>
            <p className={styles.testimonialText}>"{testimonials[currentIndex].text}"</p>
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

      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[4] = el}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <p className={styles.subtext}>A glimpse into our journey — prototypes, field tests & more.</p>

          <div className={styles.galleryWrapper}>
            <div className={styles.galleryTrack}>
              
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


      <section className={`${styles.section} ${styles.fadeSection}`} ref={(el) => fadeRefs.current[5] = el}>
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
                placeholder="Have something you'd like to share? We're all ears — or feel free to skip it!"
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

              {error && <div style={{color: "#c00", marginTop: 4}}>{error}</div>}
              {success && <div style={{color: "#0ab772", marginTop: 4}}>Thank you – we received your message!</div>}

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

      {showTeamPopup && (
        <div className={styles.popupOverlay}>
          <div className={`${styles.popupLarge} ${styles.fadeIn}`}>
            <button className={styles.closeBtn} onClick={() => setShowTeamPopup(false)}>×</button>
            <h2>Join Our Team</h2>
            <form className={styles.popupForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Phone Number (Optional)" />
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.formLabel}>Your Area of Interest:</label>
                <select required>
                  <option value="">Select Role</option>
                  <option>Engineering/AI</option>
                  <option>Design & UI/UX</option>
                  <option>Marketing</option>
                  <option>Field Ops</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <textarea placeholder="Why do you want to join Cropion?" rows={3} required></textarea>
              </div>

              <div className={styles.formSection}>
                <label className={styles.formLabel}>Attach Resume:</label>
                <label className={styles.fileLabel}>
                  <input type="file" hidden />
                  📎 Upload File
                </label>
              </div>

              <div className={styles.popupActions}>
                <button className={styles.ctaButton}>Submit</button>
                <button className={styles.secondaryButton} onClick={() => setShowTeamPopup(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}