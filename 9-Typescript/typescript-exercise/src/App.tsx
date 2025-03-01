import { useState } from "react";
import GenericList from "./components/GenericList";
import { generateUser, userList } from "./data/user";
import { generateProduct, productList } from "./data/product";

function App() {
    const [userInputs] = useState({
        name: "fsdf",
        age: 12,
    });
    return (
        <>
            <GenericList
                generateItem={() => {
                    return generateUser(userInputs.name, userInputs.age);
                }}
                initialItems={userList}
                renderItem={(item) => (
                    <>
                        <h1>{item.name}</h1>
                        <h4>{item.age} years</h4>
                    </>
                )}
            />
            <GenericList
                generateItem={() => {
                    return generateProduct();
                }}
                initialItems={productList}
                renderItem={(item) => (
                    <>
                        <h1>{item.name}</h1>
                        <h4>{item.price}$</h4>
                    </>
                )}
            />
        </>
    );
}

export default App;
