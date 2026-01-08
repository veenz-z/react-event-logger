import {useState} from "react";

function AddEventModal({onClose, onAddEvent}) {

    const [title, setTitle] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Date.now(),
            title,
            dateTime,
            description,
            details
        };

        onAddEvent(newEvent);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Add New Event</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Date & Time"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Additional Details (optional)"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />

                    <div className="modal-actions">
                        <button type="submit">Add Event</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AddEventModal;
