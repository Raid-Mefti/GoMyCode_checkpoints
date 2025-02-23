import { useState } from "react";

export default function Card() {
    const [paragraph, setParagraph] = useState(" ");
    const [number, setNumber] = useState(10);
    const calculation = function Calculate(paragraph, number) {
        return paragraph.slice(0, number);
    };
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <input
                    value={paragraph}
                    type="text"
                    className=""
                    onChange={(event) => {
                        setParagraph(event.currentTarget.value);
                    }}
                />
                <h2 className="card-title">
                    {calculation(paragraph, number)}{" "}
                </h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
