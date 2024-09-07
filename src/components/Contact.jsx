// Contact.js

import React from "react";
import "../css/contact.css"; // Import your CSS file for styling

const Contact = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      {/* Left side with demo information */}
      <div className="contact-info">
        <h2>Owners Information</h2>
        {/* Avatar and user details */}
        <div
          className="avatar"
          onClick={() => handleEmailClick("example@example.com")}
        >
          <div className="a1">
            <img
              src="src\assets\author1.jpg"
              alt="User Avatar"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <p><span>Name:</span> Krishna Ingalgi</p>
            <p><span>Role:</span> Full Stack Developer</p>
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:krishnaingalgi10@gmail.com">
                krishnaingalgi10@gmail.com
              </a>
            </p>
          </div>
          <div className="a2">
            <img
              src="src\assets\author2.jpg"
              alt="User Avatar"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <p><span>Name:</span> Om Pawar</p>
            <p><span>Role:</span> Frontend Developer</p>
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:ompawar14jan@gmail.com">
              ompawar14jan@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side with contact form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
