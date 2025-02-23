import { useEffect, useState } from "react";
import newNotif from "../events/CreateNotif";
import Notifications from "./Notifications";

export default function NotificationsGenerator() {
    const [notifs, setNotifs] = useState([]);

    useEffect(() => {
        const createN = (data) => {
            setNotifs((prev) => [...prev, { id: Date.now(), ...data }]);
        };
        const deleteN = (id) => {
            setNotifs((prev) => prev.filter((notifs) => notifs.id !== id));
        };

        newNotif.addListener("displayNotification", createN);
        newNotif.addListener("deleteNotif", deleteN);
        return () => {
            newNotif.removeListener("displayNotification", createN);
            newNotif.removeListener("deleteNotif", deleteN);
        };
    });
    return (
        <div className="toast">
            {notifs.map((notif) => (
                <Notifications
                    key={notif.id}
                    id={notif.id}
                    text={notif.text}
                    theme={notif.theme}
                />
            ))}
        </div>
    );
}
