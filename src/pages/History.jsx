import React from 'react';
import HistorySection from '../components/HistorySection';
import '../styles/history.css';

const History = () => {
  return (
    <main className="history-page">
      <div className="page-title-box">
        <h2>History</h2>
      </div>

      <div className="history-sections">
        <HistorySection
          text="Spelman College’s Commencement Weekend is deeply rooted in tradition and academic excellence. For generations, this event has honored the perseverance and success of Black women scholars and their transformative impact across the world. From its early days on campus, Commencement has stood as a unifying milestone for students, faculty, family, and community."
          image="/images/olderpic.jpg"
          alt="Historic Spelman commencement"
        />
        <HistorySection
          text="The celebration has grown to include iconic traditions like the March Through the Alumnae Arch and the ringing of the historic campus bell. These rituals are more than symbolic—they are a reaffirmation of Spelman’s mission to uplift, empower, and launch the next generation of changemakers into a global society."
          image="/images/newerpic.jpg"
          alt="Modern-day celebration"
          reverse
        />
      </div>
    </main>
  );
};

export default History;
