import SearchBar from "./SearchBar";
import EventList from "./EventList";

function Sidebar() {
    return (
        <div className="sidebar">
            <SearchBar />
            <EventList />
        </div>
    );
}

export default Sidebar;
