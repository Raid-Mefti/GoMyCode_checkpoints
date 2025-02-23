import newNotif from "../events/CreateNotif";

export default function Buttons() {
    const handleNotif = (x) => (event) => {
        event.preventDefault();
        newNotif.emit("displayNotification", x);
    };
    return (
        <div>
            <button
                className="btn btn-info"
                onClick={handleNotif({
                    text: "btn-info",
                    theme: "alert-info",
                })}
            >
                Info
            </button>

            <button
                className="btn btn-success"
                onClick={handleNotif({
                    text: "btn-success",
                    theme: "alert-success",
                })}
            >
                Success
            </button>
            <button
                className="btn btn-error"
                onClick={handleNotif({
                    text: "btn-error",
                    theme: "alert-error",
                })}
            >
                Errors
            </button>
            <button
                className="btn btn-warning"
                onClick={handleNotif({
                    text: "btn-warning",
                    theme: "alert-warning",
                })}
            >
                Warning
            </button>
        </div>
    );
}
