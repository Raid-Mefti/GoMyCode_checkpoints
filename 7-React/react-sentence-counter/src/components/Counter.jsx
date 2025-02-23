export default function Counter() {
    return (
        <div className="flex justify-between items-center colors p-5">
            <div className="flex flex-col colors border-none">
                <p>Words</p>
                <p>{"words"}</p>
            </div>
            <div className="flex flex-col colors border-none">
                <p>Characters</p>
                <p>{"characters"}</p>
            </div>
            <div className="flex flex-col colors border-none">
                <p>Sentences</p>
                <p>{"sentences"}</p>
            </div>
            <div className="flex flex-col colors border-none">
                <p>Paragraphs</p>
                <p>{"paragraphs"}</p>
            </div>
            <div className="flex flex-col colors border-none">
                <p>Pronouns</p>
                <p>{"pronouns"}</p>
            </div>
        </div>
    );
}
