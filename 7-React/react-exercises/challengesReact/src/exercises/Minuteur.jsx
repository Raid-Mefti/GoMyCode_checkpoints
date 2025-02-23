import { useEffect, useState } from "react";

export default function Minuteur() {
    const [clicks, setClicks] = useState(0);
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        const int = setInterval(() => {
            setTimer((prevT) => (prevT > 0 ? prevT - 1 : prevT));
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, []);
    return (
        <div className="my-[50px]">
            <h1>Number of clicks until timer expires</h1>
            <div className="bg-amber-600 FLEX flex-col gap-5 p-10">
                <p>{clicks}</p>
                <p>{timer}</p>
                <button
                    className="btn"
                    onClick={() => {
                        setClicks(clicks + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
