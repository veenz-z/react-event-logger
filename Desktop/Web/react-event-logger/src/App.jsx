import Sidebar from "./components/Sidebar";
import EventDetails from "./components/EventDetails";
import sampleEvents from "./data/sampleEvents";


function App() {
    return (
        <div className="app-container">
            <Sidebar sampleEvents={sampleEvents} />
            <EventDetails/>
        </div>
    );
}

export default App;
