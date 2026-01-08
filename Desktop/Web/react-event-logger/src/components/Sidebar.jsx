import SearchBar from "./SearchBar";
import EventList from "./EventList";
import {useState} from "react";
import AddEventModal from "./AddEventModal";


function Sidebar({events, selectedEvent, onSelectEvent,onAddEvent }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredEvents = events.filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (<div className="sidebar">
        <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
        />
        <button
            className="add-event-btn"
            onClick={() => setIsModalOpen(true)}
        >Add Event
        </button>

        <EventList
            events={filteredEvents}
            selectedEvent={selectedEvent}
            onSelectEvent={onSelectEvent}
        />

        {isModalOpen && (
            <AddEventModal
                onClose={() => setIsModalOpen(false)}
                onAddEvent={onAddEvent}
            />
        )}

    </div>);
}

export default Sidebar;
