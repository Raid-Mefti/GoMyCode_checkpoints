import Counter from "./components/Counter";
import Text from "./components/Text";

function App() {
    return (
        <div className="w-[70%] m-auto p-12 flex flex-col gap-10">
            <Counter />
            <Text />
        </div>
    );
}

export default App;
