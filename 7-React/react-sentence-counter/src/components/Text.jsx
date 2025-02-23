export default function Text() {
    return (
        <>
            <div>
                <textarea
                    name=""
                    id=""
                    placeholder="Paste your text here..."
                    rows="10"
                    className="w-full h-[300px] colors p-5"
                ></textarea>
            </div>
            <div className="colors p-5 flex">
                <p>Average reading time : -{0}</p>
                <p>Longest word : </p>
            </div>
        </>
    );
}
