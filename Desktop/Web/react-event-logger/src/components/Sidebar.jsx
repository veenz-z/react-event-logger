import SearchBar from "./SearchBar";
import EventList from "./EventList";

function Sidebar({ sampleEvents }) {
    return (
        <div className="sidebar">
            <SearchBar />
            <button className="add-event-btn">Add Event</button>
            <EventList events={sampleEvents} />
        </div>
    );
}

export default Sidebar;
