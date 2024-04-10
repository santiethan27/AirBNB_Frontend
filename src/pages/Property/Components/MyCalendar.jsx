import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar() {
    const [selectedDates, setSelectedDates] = useState([]);

    const handleSelectSlot = ({ start }) => {
        const selectedStart = new Date(start);

        // Limpiamos la selección previa
        setSelectedDates([]);

        // Agregamos el día seleccionado
        setSelectedDates([selectedStart]);

        // Agregamos los dos días siguientes
        const nextDay1 = new Date(selectedStart);
        nextDay1.setDate(nextDay1.getDate() + 1);
        const nextDay2 = new Date(selectedStart);
        nextDay2.setDate(nextDay2.getDate() + 2);

        setSelectedDates(prevDates => [...prevDates, nextDay1, nextDay2]);
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: isSelected ? 'blue' : 'green',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    };

    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={selectedDates.map(date => ({ start: date, end: moment(date).add(1, 'days').toDate(), title: 'Selected Date' }))}
                selectable
                onSelectSlot={handleSelectSlot}
                views={['month']}
                step={60}
                showMultiDayTimes
                defaultDate={new Date()}
                eventPropGetter={eventStyleGetter}
            />
            <div>
                <h2>Seleccionaste las siguientes fechas:</h2>
                <ul>
                    {selectedDates.map((date, index) => (
                        <li key={index}>{date.toDateString()}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyCalendar;

