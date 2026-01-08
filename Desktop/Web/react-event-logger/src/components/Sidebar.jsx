import SearchBar from "./SearchBar";
import EventList from "./EventList";

function Sidebar() {
    return (
        <div className="sidebar">
            <SearchBar />
            <button className="add-event-btn">+ Add Event</button>
            <EventList />
        </div>
    );
}

export default Sidebar;
