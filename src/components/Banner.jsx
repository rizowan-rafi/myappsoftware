import background from "../assets/background1.jpg";
import { Link } from "react-router";
const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">
                        Unleash Your Potential
                    </h1>
                    <p className="mb-5 text-xl">
                        Choose Your Workout. Track Your Progress. Transform Your
                        Life.
                    </p>
                    <Link to={'/exercise'} className="btn btn-primary bg-black">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
