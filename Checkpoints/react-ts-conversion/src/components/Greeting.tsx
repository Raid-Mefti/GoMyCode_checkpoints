import React from "react";

// Define the props interface for the Greeting component
interface GreetingProps {
    name: string; // The `name` prop is a required string
}

// Define the Greeting component with TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;
