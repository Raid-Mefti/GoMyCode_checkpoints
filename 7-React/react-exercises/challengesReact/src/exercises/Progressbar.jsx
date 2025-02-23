import { useState } from "react";

export default function Progressbar() {
    const [input, setInput] = useState(0);
    return (
        <div>
            <h1>Progress bar</h1>
            <div className="w-[500px] h-[30px] bg-gray-700">
                <div
                    className="h-[100%] bg-amber-500"
                    style={{ width: Number(input) + "%" }}
                ></div>
            </div>
            <div>
                <p>input percentage</p>
                <input
                    type="number"
                    className="border"
                    max={100}
                    min={0}
                    onChange={(e) => {
                        const value = Number(e.currentTarget.value);
                        if (value <= 100) setInput(value);
                    }}
                />
            </div>
        </div>
    );
}
