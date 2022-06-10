import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ContactUs = () => {
  return <div>
  <Header />
      <div className="movie-items">
      <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email address" />
            <textarea placeholder="Your message"></textarea>
            <button>Send Message</button>
            <span>Thank you for your message, we will be in touch in no time!</span>
        </div>
      </div>
  <Footer />
</div>;

};

export default ContactUs;
