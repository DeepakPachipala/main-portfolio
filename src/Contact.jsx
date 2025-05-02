import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [inView, setInView] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const headingRef = useRef(null);
  const formRef = useRef(null); // ✅ Form reference for emailjs

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      // ✅ EmailJS send form
      emailjs
        .sendForm(
          "service_4dls0oh",     // e.g., service_xxxxxx
          "template_80cqqlu",    // e.g., template_xxxxxx
          formRef.current,
          "6Pl2nXHwBPrTjBy2U"      // e.g., 7f9xxxxxxxN8
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowBanner(true);
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => {
              setShowBanner(false);
            }, 3000);
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    } else {
      alert("Please fill all fields.");
    }
  };

  useEffect(() => {
    setIsFormValid(
      formData.name.trim() && formData.email.trim() && formData.message.trim()
    );
  }, [formData]);

  return (
    <>
      <div className={`form-banner ${showBanner ? "show" : ""}`}>
        Your message has been sent successfully!
      </div>

      <h2
        id="contact"
        ref={headingRef}
        className={`section-title ${inView ? "animate" : ""}`}
      >
        Contact
      </h2>

      <div className="contact">
        <div className="contact-container">
          <div className="contact-form-container">
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-subheading">We would love to hear from you!</p>

            <div className="form-content">
              <div className="form-image">
                <img
                  src="/assets/MailOpen.avif"
                  alt="Contact Image"
                />
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                ref={formRef} // ✅ Attach ref for EmailJS
              >
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
