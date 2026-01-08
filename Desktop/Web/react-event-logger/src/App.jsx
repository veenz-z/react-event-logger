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

    const _setEvents = (newEvents) => {
        setEventsState(newEvents);
        localStorage.setItem("events", JSON.stringify(newEvents));
    };


    return (
        <div className="app-container">
            <Sidebar
                events={events}
                selectedEvent={selectedEvent}
                onSelectEvent={setSelectedEvent}
            />
            <EventDetails selectedEvent={selectedEvent} />
        </div>
    );
}

export default App;
