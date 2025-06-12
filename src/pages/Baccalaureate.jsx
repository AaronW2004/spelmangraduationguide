import React from 'react';
import EventDateTime from '../components/EventDateTime';
import EventImage from '../components/EventImage';
import EventInfoBox from '../components/EventInfoBox';
import '../styles/baccalaureate.css';

const Baccalaureate = () => {
  return (
    <main className="baccalaureate">
      <div className="baccalaureate-title-row">
        <div className="page-title-box"><h2>Baccalaureate</h2></div>
        <EventDateTime date="Saturday, May 11 · 11:00 AM" />
      </div>

      <div className="baccalaureate-grid">
        <div className="left-section">
          <div className="paragraph-box">
            The Baccalaureate Service is a spiritually enriching ceremony that invites students, faculty,
            families, and friends to reflect on the journey to graduation. Rooted in Spelman’s core values,
            this interfaith event fosters unity, purpose, and gratitude through music, spoken word, and
            messages of encouragement from esteemed guests.
          </div>

          <div className="info-box-column">
            <EventInfoBox
              text="Saturday, May 11 · 11:00 AM · Chapel Hall"
              type="text"
            />
            <EventInfoBox
              text="View Commencement Schedule"
              type="link"
              to="/schedule"
            />
          </div>
        </div>

        <div className="right-section">
          <EventImage
            src={`${process.env.PUBLIC_URL}/images/conventioncenter.jpg`}
            caption="Baccalaureate Service held in Georgia International Convention Center in College Park, Georgia."
            alt="Convention Center"
          />
        </div>
      </div>

      <div className="speaker-box">
        Taraji P. Henson will deliver the keynote address at Spelman College’s 2025 commencement ceremony. As a celebrated actress, producer, and advocate, she brings her powerful story of resilience and success to inspire the graduates. Her presence highlights Spelman’s dedication to uplifting strong, impactful women of color. The ceremony promises an unforgettable celebration of achievement, guided by Taraji’s grace, humor, and motivational spirit.
      </div>
    </main>
  );
};

export default Baccalaureate;
