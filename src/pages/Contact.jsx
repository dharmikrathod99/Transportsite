import React from "react";
import "./Contact.css";
import Navbar from "../components/Navbar/Navbar";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Navbar/>
            {/* Background */}
            <div className="background">

                <div className="sky">
                    <div className="sun"></div>
                    <div className="cloud cloud1"></div>
                    <div className="cloud cloud2"></div>
                    <div className="cloud cloud3"></div>
                </div>

                {/* Road and Trucks */}
                <div className="road">
                    <div className="truck truck-red">
                        <div className="truck-body"></div>
                        <div className="truck-wheel wheel1"></div>
                        <div className="truck-wheel wheel2"></div>
                    </div>
                    <div className="truck truck-blue">
                        <div className="truck-body"></div>
                        <div className="truck-wheel wheel1"></div>
                        <div className="truck-wheel wheel2"></div>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form-container">
                <h1>Contact Us</h1>
                <p>Get in Touch with Us!</p>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact-info">
                    <p>📍 Address:  near suvarnbag,mantri society -una Gujrat</p>
                    <p>📞 Phone: +91 97238 06447</p>
                    <p>✉️ Email: rajurathod6447@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

// done