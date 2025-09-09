import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

export default function ContactUs() {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                "service_hb3hg9j",
                "template_lwzc7ch",
                formRef.current,
                "jP5Oi5ziB623sXRmI"
            )
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your form has been submitted!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                },
                (error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Failed to send message",
                        text: error.text,
                    });
                    console.error("FAILED...", error.text);
                }
            )
            .finally(() => setIsSending(false));
    };

    return (
        <div>
            <NavBar></NavBar>
        <div
            className="w-full h-[700px] m-0 p-0 flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/contactbg.jpg')" }}
            >
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl w-full max-w-md shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold text-white-500">
                    Contact Us
                </h2>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-white-500 font-semibold">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white-400 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-white-500 font-semibold">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white-400 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block mb-1 text-white-500 font-semibold">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter subject"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white-400 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 text-white-500 font-semibold">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            rows="5"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white-400 resize-none focus:outline-none focus:ring-2 focus:ring-white"
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
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}
