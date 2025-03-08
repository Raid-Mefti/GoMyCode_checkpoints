import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <Image
                src="/next.svg"
                alt="Profile Picture"
                width={200}
                height={200}
                style={{ borderRadius: "50%" }}
            />
            <p>
                This is the about page where I share my background and skills.
            </p>
        </div>
    );
}
