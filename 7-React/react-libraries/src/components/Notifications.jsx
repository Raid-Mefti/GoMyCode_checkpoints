import { useEffect } from "react";
import newNotif from "../events/CreateNotif";

export default function Notifications({ id, text, theme }) {
    useEffect(() => {
        const t = setTimeout(() => {
            newNotif.emit("deleteNotif", id);
        }, 3000);
        return () => {
            clearTimeout(t);
        };
    }, []);

    return (
        <div className={"alert " + theme}>
            <span>{text}</span>
        </div>
    );
}
