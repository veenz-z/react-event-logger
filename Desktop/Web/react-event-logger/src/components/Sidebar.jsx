import SearchBar from "./SearchBar";
import EventList from "./EventList";

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="add-event-btn">+ Add Event</button>
            <SearchBar />
            <EventList />
        </div>
    );
}

export default Sidebar;
