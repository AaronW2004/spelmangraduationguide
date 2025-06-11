import React from 'react';
import '../styles/schedule.css';

const ScheduleTable = () => {
  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:00 AM</td>
          <td>Class Day</td>
          <td>Oval Green</td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td>Baccalaureate</td>
          <td>Chapel Hall</td>
        </tr>
        <tr>
          <td>3:00 PM</td>
          <td>Graduation Ceremony</td>
          <td>Spelman Stadium</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScheduleTable;
