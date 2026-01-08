import Sidebar from "./components/Sidebar";
import EventDetails from "./components/EventDetails";
import sampleEvents from "./data/sampleEvents";
import {useState} from "react";


function App() {


    const initialEvents = (() => {
        const stored = localStorage.getItem("events");
        return stored ? JSON.parse(stored) : sampleEvents;
    })();

    const [events, setEventsState] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const setEvents = (newEvents) => {
        setEventsState(newEvents);
        localStorage.setItem("events", JSON.stringify(newEvents));
    };

    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter((e) => e.id !== eventId);
        setEvents(updatedEvents);
        setSelectedEvent(null);
    };


    return (
        <div className="app-container">
            <Sidebar
                events={events}
                selectedEvent={selectedEvent}
                onSelectEvent={setSelectedEvent}
                onAddEvent={(newEvent) => setEvents([...events, newEvent])}
            />
            <EventDetails
                selectedEvent={selectedEvent}
                onDeleteEvent={handleDeleteEvent}
            />
        </div>
    );
}

export default App;
