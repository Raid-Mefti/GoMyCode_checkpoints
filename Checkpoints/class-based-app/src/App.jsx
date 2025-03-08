import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: "John Doe",
                bio: "A passionate developer.",
                imgSrc: "https://via.placeholder.com/150",
                profession: "Software Engineer",
            },
            shows: false,
            mountTime: new Date(),
            timeSinceMount: 0,
        };
    }

    toggleShow = () => {
        this.setState((prevState) => ({ shows: !prevState.shows }));
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const timeSinceMount = Math.floor(
                (new Date() - this.state.mountTime) / 1000
            );
            this.setState({ timeSinceMount });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { fullName, bio, imgSrc, profession } = this.state.person;
        const { shows, timeSinceMount } = this.state;

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Person Profile</h1>
                <button onClick={this.toggleShow}>
                    {shows ? "Hide Profile" : "Show Profile"}
                </button>

                {shows && (
                    <div>
                        <img
                            src={imgSrc}
                            alt={fullName}
                            style={{ borderRadius: "50%" }}
                        />
                        <h2>{fullName}</h2>
                        <p>{bio}</p>
                        <p>
                            <strong>Profession:</strong> {profession}
                        </p>
                    </div>
                )}

                <p>Time since mount: {timeSinceMount} seconds</p>
            </div>
        );
    }
}

export default App;
