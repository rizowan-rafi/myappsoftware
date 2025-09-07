import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const SignUp = () => {
     const navigate = useNavigate();
const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
        Swal.fire({
                   position: "center",
                   icon: "error",
                   title: "Password must be have atleast 6 characters",
                   showConfirmButton: false,
                   timer: 1500,
               });
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
         Swal.fire({
             position: "center",
             icon: "error",
             title: "User already registered.please use another email",
             showConfirmButton: false,
             timer: 1500,
         });
        return;
    }

    const newUser = { name, email, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

     Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successful.please login",
                showConfirmButton: false,
                timer: 1500,
            });

    e.target.reset();
    navigate('/login')
};

    return (
        <div className="min-h-screen">
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row space-x-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    name="name"
                                />
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    name="email"
                                />
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name="password"
                                />
                                <div>
already have account?
                                    <Link to={'/login'} className="link link-hover pl-2">
                                        Login
                                    </Link>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
