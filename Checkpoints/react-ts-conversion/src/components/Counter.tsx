import React, { Component } from "react";

// Define the state interface for the Counter component
interface CounterState {
    count: number; // The `count` state is a number
}

// Define the Counter component with TypeScript
class Counter extends Component<{}, CounterState> {
    // Initialize the state
    state: CounterState = {
        count: 0,
    };

    // Define the increment method
    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    // Render the component
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
