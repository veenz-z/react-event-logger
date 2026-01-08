import SearchBar from "./SearchBar";
import EventList from "./EventList";

function Sidebar({events, selectedEvent, onSelectEvent}) {
    return (
        <div className="sidebar">
            <SearchBar/>
            <button className="add-event-btn">Add Event</button>
            <EventList
                events={events}
                selectedEvent={selectedEvent}
                onSelectEvent={onSelectEvent}
            /></div>
    );
}

export default Sidebar;
