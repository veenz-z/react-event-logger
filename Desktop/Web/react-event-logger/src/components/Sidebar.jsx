function Sidebar() {
    return (
        <aside className="sidebar">

            <h2 className="sidebar-header">Events</h2>

            <input
            type = "text"
            placeholder = "Search events here..."
            className="search-input"
            />

            <button className="add-event-btn">+ Add Event</button>

            <ul className="event-list">
                <li className="event-item">Sample Event 1</li>
                <li className="event-item">Sample Event 2</li>
                <li className="event-item">Sample Event 3</li>
            </ul>

        </aside>
    )
}

export default Sidebar;
