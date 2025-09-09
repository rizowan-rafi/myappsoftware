import { Link,useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
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
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login')
    }
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
                <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="hover:bg-white hover:text-black hover:rounded-lg hover:font-semibold">
                <Link to={"/bmr"}>BMR</Link>
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
                            <div className="w-28 bg-white text-black font-bold flex justify-center  items-center  rounded-full">
                                {/* <p className="text-center flex justify-center items-center mt-2">
                                    {user.name[0]}
                                    {user.name[1]}
                                </p> */}
                                <div className="flex flex-col items-center">
  {user.photo ? (
    <img
      src={user.photo}
      alt={user.name}
      className="lg:w-40 lg:h-40 w-28 h-28 rounded-full object-cover shadow"
    />
  ) : (
    <p className="lg:w-40 lg:h-40 w-28 h-28 rounded-full bg-white text-black flex justify-center items-center text-4xl font-bold shadow">
      {user.name[0]}
      {user.name[1]}
    </p>
  )}

  {/* Below name/initials */}
  <p className="text-center flex justify-center items-center mt-2 text-lg font-semibold">
    {user.photo ? user.name : `${user.name[0]}${user.name[1]}`}
  </p>
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
                                <a>Settings</a>
                            </li>
                            <li onClick={handleLogout}>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to={"/login"} className="btn">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
