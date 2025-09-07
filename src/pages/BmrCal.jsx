import { useRef, useState } from "react";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";

export default function BmiCal() {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    const [bmiValue, setBmiValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const name = e.target.name.value;
        const weight = parseFloat(e.target.weight.value);
        const height = parseFloat(e.target.height.value);

        if (isNaN(weight) || isNaN(height)) {
            Swal.fire("Error", "Please enter valid numbers", "error");
            setIsSending(false);
            return;
        }

        // --- BMI Calculation ---
        const heightInMeter = height / 100;
        const bmi = weight / (heightInMeter * heightInMeter);

        let resultStatus = "";
        if (bmi < 18.5) resultStatus = "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) resultStatus = "Normal";
        else if (bmi >= 25 && bmi < 29.9) resultStatus = "Overweight";
        else resultStatus = "Obese";

        setStatus(resultStatus);
        setBmiValue(bmi.toFixed(1));

        Swal.fire({
            title: `Hello, ${name}!`,
            html: `
                <p><b>BMI:</b> ${bmi.toFixed(1)}</p>
                <p><b>Status:</b> ${resultStatus}</p>
            `,
            icon: "info",
        });

        setIsSending(false);
        formRef.current.reset();
    };

    return (
        <div>
            <NavBar />
            <div
                className="w-full h-[700px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/img/contactbg.jpg')" }}
            >
                <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl w-full max-w-md shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-bold text-white">
                        BMI Calculator
                    </h2>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-white font-semibold">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>

                        {/* Weight */}
                        <div>
                            <label className="block mb-1 text-white font-semibold">
                                Weight (KG)
                            </label>
                            <input
                                type="number"
                                name="weight"
                                placeholder="Enter your Weight"
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>

                        {/* Height */}
                        <div>
                            <label className="block mb-1 text-white font-semibold">
                                Height (CM)
                            </label>
                            <input
                                type="number"
                                name="height"
                                placeholder="Enter Height"
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full p-3 rounded-md text-white font-semibold transition-all duration-300 ${
                                isSending
                                    ? "bg-blue-300 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-400"
                            }`}
                        >
                            {isSending ? "Calculating..." : "Check BMI"}
                        </button>
                    </form>

                    {bmiValue && (
                        <div className="mt-6 flex flex-col items-center">
                            <p className="text-white mb-2">
                                BMI: {bmiValue} ({status})
                            </p>
                            {status === "Underweight" || status === "Obese" ? (
                                <progress
                                    className="progress progress-error w-56"
                                    value={bmiValue}
                                    max="40"
                                ></progress>
                            ) : status === "Overweight" ? (
                                <progress
                                    className="progress progress-warning w-56"
                                    value={bmiValue}
                                    max="40"
                                ></progress>
                            ) : (
                                <progress
                                    className="progress progress-success w-56"
                                    value={bmiValue}
                                    max="40"
                                ></progress>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
