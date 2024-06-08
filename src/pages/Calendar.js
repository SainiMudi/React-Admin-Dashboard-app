// src/pages/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2024-06-08' },
        { title: 'Event 2', date: '2024-06-10' },
      ]}
    />
  );
};

export default Calendar;
