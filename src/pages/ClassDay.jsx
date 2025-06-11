import React from 'react';
import EventImage from '../components/EventImage';
import EventInfoBox from '../components/EventInfoBox';
import EventDateTime from '../components/EventDateTime';
import '../styles/classday.css';

const ClassDay = () => {
  return (
    <main className="classday">
      <div className="classday-title-row">
        <div className="page-title-box"><h2>Class Day</h2></div>
        <EventDateTime date="Friday, May 10, 2025 – 10:00 AM" />
      </div>

      <div className="classday-grid">
        <div className="left-side">
          <EventImage
            src="/images/arch.jpg"
            caption="Class Day, March Through the Alumnae Arch"
            alt="Arch image"
          />
          <div className="info-box-row">
            <EventInfoBox
              text="May 10 · 10:00 AM · Oval Green"
              type="text"
            />
            <EventInfoBox
              text="View Commencement Schedule"
              type="link"
              to="/schedule"
            />
          </div>
        </div>

        <div className="right-side">
          <div className="details-box">
            Class Day at Spelman College is a cherished tradition that celebrates the resilience,
            sisterhood, and achievements of the graduating senior class. Held annually on the Friday
            before Commencement, Class Day is a moment for reflection and recognition. Students, adorned
            in white attire and often carrying symbolic items like sunflowers or candles, gather with
            faculty, family, and alumnae to honor their journey. The ceremony includes inspiring speeches,
            musical performances, and awards that recognize academic excellence, leadership, and community
            service. At its heart, Class Day embodies Spelman’s legacy of cultivating trailblazers who are
            intellectually curious, socially conscious, and committed to uplifting others. The event serves
            not only as a bridge between the academic and ceremonial milestones of graduation but also as
            a powerful affirmation of the lifelong bond shared among Spelman women.
          </div>

          <EventImage
            src="/images/graduatesmarch.jpg"
            caption="Graduates march through the Alumnae Arch in their commencement attire"
            alt="Graduation image"
          />
        </div>
      </div>
    </main>
  );
};

export default ClassDay;
