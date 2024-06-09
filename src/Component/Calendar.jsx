import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../Styles/Calendar.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Calendar() {
   
    const [events, setEvents] = useState([
        { title: 'Interhouse sport', start: new Date() }
      ]);
    
      const handleDateClick = (arg) => {
        const title = prompt('School Calendar');
        if (title) {
          setEvents([...events, { title, start: arg.date }]);
        }
      };
    
      return (<>
         <Navbar/>
        <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
    <Footer/>
    </>
      );
}

export default Calendar