import Sidebar from "./components/Sidebar";
import EventDetails from "./components/EventDetails";
import sampleEvents from "./data/sampleEvents";
import {useState} from "react";


function App() {

    const [events] = useState(sampleEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);


    return (
        <div className="app-container">
            <Sidebar
                events={events}
                selectedEvent={selectedEvent}
                onSelectEvent={setSelectedEvent}
            />
            <EventDetails selectedEvent={selectedEvent}/>
        </div>
    );
}

export default App;
