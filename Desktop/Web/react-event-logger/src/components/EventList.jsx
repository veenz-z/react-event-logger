function EventList({events, selectedEvent, onSelectEvent}) {
    return (
        <ul className="event-list">
            {events.map(event => (

                <li key={event.id}
                    className={`event-item ${
                        selectedEvent?.id === event.id ? "active" : ""
                    }`}
                    onClick={() => onSelectEvent(event)}>


                    <div className="event-title">{event.title}</div>
                    <div className="event-date">{event.dateTime}</div>
                </li>
            ))}
        </ul>
    );
}

export default EventList;
