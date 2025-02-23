export default function Error({ error }) {
    return (
        <div>
            <h1 className="flex justify-center items-center h-screen text-red-500 text-3xl ">
                {error ? error.message : "Page not found"}
            </h1>
        </div>
    );
}
