import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/eventinfobox.css';

const EventInfoBox = ({ text, type, to }) => {
  if (type === 'link') {
    return (
      <Link to={to} className="event-info-box link">
        {text}
      </Link>
    );
  }

  return <div className="event-info-box">{text}</div>;
};

export default EventInfoBox;
