import { useState } from "react";

export default function Showhidebutton() {
    const [visibility, setVisibility] = useState(true);

    return (
        <div className="flex justify-center items-center w-[100%] px-10 h-[300px] gap-[50px]">
            <button
                className="btn"
                onClick={() => {
                    setVisibility(!visibility);
                }}
            >
                {visibility ? "Hide" : "Show"}
            </button>
            {visibility ? (
                <p className="border">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Atque, veritatis.
                </p>
            ) : null}
        </div>
    );
}
