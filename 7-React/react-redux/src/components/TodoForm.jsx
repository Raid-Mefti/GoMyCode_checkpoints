export default function todoForm() {
    return (
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">Add new todo list</legend>

            <label className="fieldset-label">TItle</label>
            <input type="text" className="input" placeholder="Title" />

            <label className="fieldset-label">Description</label>
            <textarea className="input" placeholder="Write your content here" />

            <button className="btn btn-neutral mt-4">Add</button>
        </fieldset>
    );
}
