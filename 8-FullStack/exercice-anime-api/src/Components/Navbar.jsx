import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">
                        Homepage
                    </Link>
                    <Link to="/characters" className="btn btn-ghost text-xl">
                        Display all characters
                    </Link>
                </div>
                <div className="flex gap-2">
                    <form
                        action="/search"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.currentTarget.value);
                            }}
                            className="input input-bordered w-24 md:w-auto"
                        />
                        <Link
                            to={"/search?character=" + search}
                            type="submit"
                            className="btn"
                        >
                            🔍
                        </Link>
                    </form>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
