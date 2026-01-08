function EventDetails({ selectedEvent }) {
    if (!selectedEvent) {
        return (
            <div className="event-details">
                <p className="placeholder-text">
                    Select an event to view details
                </p>
            </div>
        );
    }

    return (
        <div className="event-details">
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date & Time:</strong> {selectedEvent.dateTime}</p>
            <p>{selectedEvent.description}</p>
            <p>{selectedEvent.details}</p>
        </div>
    );

}

export default EventDetails;
