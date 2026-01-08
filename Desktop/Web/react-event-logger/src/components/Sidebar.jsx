import SearchBar from "./SearchBar";
import EventList from "./EventList";
import {useState} from "react";


function Sidebar({events, selectedEvent, onSelectEvent}) {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredEvents = events.filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (<div className="sidebar">
            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <button className="add-event-btn">Add Event</button>
            <EventList
                events={filteredEvents}
                selectedEvent={selectedEvent}
                onSelectEvent={onSelectEvent}
            /></div>);
}

export default Sidebar;
