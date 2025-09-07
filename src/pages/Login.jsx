import NavBar from "../components/NavBar";
import { Link, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
const Login = () => {
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find((user) => user.email === email);

        if (!existingUser) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "User not found.please Sign Up",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }

        if (existingUser.password !== password) {
             Swal.fire({
                 position: "center",
                 icon: "error",
                 title: "Invalid Password",
                 showConfirmButton: false,
                 timer: 1500,
             });
            return;
        }

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
        });

        localStorage.setItem("user", JSON.stringify(existingUser));
        e.target.reset();

        navigate({
            pathname: "/",
            search: 'new',
            state: { some: "login" },
        });
    }
    return (
        <div className="min-h-screen">
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row space-x-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn} className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    name='email'
                                />
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name='password'
                                />
                                <div>
                                        Doesn't have account? 
                                    <Link to={'/signup'} className="link link-hover pl-2">
                                    Sign Up

                                    </Link>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
