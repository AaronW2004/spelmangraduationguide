import React from 'react';
import EventImage from '../components/EventImage';
import ContactForm from '../components/ContactForm';
import '../styles/contactus.css';

const ContactUs = () => {
  return (
    <main className="contact-us">
      <div className="contact-us-title-row">
        <div className="page-title-box"><h2>Contact Us</h2></div>
      </div>

      <div className="contact-grid">
        <div className="left-column">
          <div className="contact-paragraph">
            Our site is managed by members of the Spelman College Communications Team and Graduation Planning Committee.
            Any questions submitted through this form are directed to staff members who are actively engaged in coordinating
            Commencement Weekend. Our team is committed to providing timely and informative responses to help you and your loved ones
            prepare for this momentous occasion.
          </div>

          <div className="contact-paragraph contact-paragraph-mid">
            <strong>General Questions:</strong> info@spelman.edu<br />
            <strong>Phone:</strong> (404) 270-5000<br />
            <strong>Office Hours:</strong> Mon–Fri, 9am–5pm EST
          </div>

          <div className="contact-paragraph">
            For guest speaker inquiries or event-specific concerns, please contact Dr. Lisa Monroe at lmonroe@spelman.edu
            or call the Office of Academic Affairs at (404) 270-5100.
          </div>
        </div>

        <div className="right-column">
          <EventImage
            src="/images/students.jpg"
            caption="Students gathered during a prior year's celebration weekend"
            alt="Students in commencement attire"
            size="sm"
          />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
