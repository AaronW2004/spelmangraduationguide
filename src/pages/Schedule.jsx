import React from 'react';
import ScheduleTable from '../components/ScheduleTable';
import CampusMap from '../components/CampusMap';
import '../styles/schedule.css';

const Schedule = () => {
  return (
    <main className="schedule">
      <div className="title-row">
        <div className="page-title-box"><h2>Schedule</h2></div>
      </div>

      <div className="table-container">
        <ScheduleTable />
      </div>

      <CampusMap />
    </main>
  );
};

export default Schedule;
