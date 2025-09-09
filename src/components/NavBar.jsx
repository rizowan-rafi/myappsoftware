import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
const NavBar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };
    const lists = (
        <>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/exercise"}>Exercises</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/recipees"}>Recipes</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/fitness-articles"}>Fitness Articles</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/bmr"}>BMI</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/contact"}>Contact Us</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-transparent text-white shadow-sm lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {lists}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gym</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{lists}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 h-10 bg-white text-black font-bold rounded-full">
                                <div className="flex items-center justify-center h-full">
                                    {user.photo ? (
                                        <img
                                            src={user.photo}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full object-cover shadow"
                                        />
                                    ) : (
                                        <p className="w-10 h-10 rounded-full bg-white text-black flex justify-center items-center text-sm font-bold shadow">
                                            {user.name[0]}
                                            {user.name[1]}
                                        </p>
                                    )}

                                    {/* Below name/initials */}
                                </div>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link
                                    to={"/profile"}
                                    className="justify-between"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/update-profile"}
                                    className="justify-between"
                                >
                                    Update Profile
                                </Link>
                            </li>

                            <li onClick={handleLogout}>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="space-x-4">
                        <Link to={"/login"} className="btn">
                            Login
                        </Link>
                        <Link to={"/signup"} className="btn">
                            SignUp
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
