import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
const ExcerciseDetail = () => {
    const { params } = useParams();
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [exerciseInfo, setExerciseInfo] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch("/exercises.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const exerciseDetail = data.find(
                    (ex) => ex.name.toLowerCase() === params.toLowerCase()
                );
                if (!exerciseDetail) {
                    throw new Error("Exercise not found");
                }
                setExercise(exerciseDetail);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [params]);
    const getEmbedUrl = (url) => {
        const match = url.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
        );
        const videoId = match ? match[1] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    const [addExerciseName, setAddExerciseName] = useState(
        "add exercise to profile"
    );

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default first

        if (!user) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No user, please sign in",
                showConfirmButton: false,
                timer: 1500,
            });

            return;
        }

        const form = e.target;
        const day = form.querySelector("select").value;
        const sets = form.querySelector("input[placeholder='Sets']").value;
        const reps = form.querySelector("input[placeholder='Reps']").value;
        const weightInput = form.querySelector(
            "input[placeholder='Weight (kg)']"
        );
        const weight = weightInput ? weightInput.value : "0";
        const notes = form.querySelector("textarea").value;

        if (!day || !sets || !reps) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill in all required fields",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }

        // Validate numeric fields
        const setsNum = parseInt(sets);
        const repsNum = parseInt(reps);
        const weightNum =
            exercise.equipment.toLowerCase() !== "bodyweight"
                ? parseFloat(weight)
                : 0;

        if (isNaN(setsNum) || setsNum <= 0) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Invalid sets",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        if (isNaN(repsNum) || repsNum <= 0) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Invalid reps",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        if (
            exercise.equipment.toLowerCase() !== "bodyweight" &&
            (isNaN(weightNum) || weightNum <= 0)
        ) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Invalid weight",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }

        const exerciseData = {
            name: exercise.name,
            day,
            sets: setsNum,
            reps: repsNum,
            weight: weightNum,
            notes,
            email: user.email,
        };

        const storedExercises =
            JSON.parse(localStorage.getItem("exercises")) || [];

        const isAlreadyAdded = storedExercises.some(
            (ex) =>
                ex?.name.toLowerCase() === exercise.name.toLowerCase() &&
                ex?.day.toLowerCase() === day.toLowerCase() &&
                ex?.email.toLowerCase() === user.email.toLowerCase()
        );

        if (!isAlreadyAdded) {
            storedExercises.push(exerciseData);
            localStorage.setItem("exercises", JSON.stringify(storedExercises));
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Exercise added to your profile",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Exercise already exists in your profile for this day",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        form.reset();
        document.getElementById("my_modal_5")?.close();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <nav>
                <NavBar></NavBar>
            </nav>
            <div className="video-container">
                <iframe
                    className="w-[90%] mx-auto mt-5 h-96"
                    src={getEmbedUrl(exercise.videoUrl)}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="exercise-details w-[90%] mx-auto mt-5">
                <h1 className="text-3xl font-bold mb-4">{exercise.name}</h1>
                <div className="flex  items-center mb-4">
                    <p className="text-lg mb-2 border-r-2 pr-2">
                        {exercise.equipment}
                    </p>
                    <p className="text-lg mb-2 pl-2 border-r-2 pr-2">
                        {exercise.difficulty}
                    </p>
                    <p className="text-lg mb-2 pl-2">{exercise.category}</p>
                </div>
                <p className="text-lg mb-2">
                    {exercise.muscleGroup.map((group, index) => (
                        <span
                            key={index}
                            className="badge bg-black badge-primary mr-2"
                        >
                            {group}
                        </span>
                    ))}
                </p>

                <p className="text-2xl font-semibold mt-4 mb-4">
                    Step to Do the Exercise
                </p>
                <p className="text-xl">{exercise.instructions}</p>
                <div className="mt-5 text-center pb-5">
                    <button
                        onClick={() => {
                            document.getElementById("my_modal_5").showModal();
                        }}
                        className="btn btn-primary bg-white text-black "
                    >
                        {addExerciseName}
                    </button>

                    <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                    >
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">
                                Press ESC key or click the button below to close
                            </p>
                            <form
                                action=""
                                onSubmit={handleSubmit}
                                className="flex flex-col"
                            >
                                <div>
                                    <select
                                        defaultValue="Select a day"
                                        className="select"
                                        required
                                    >
                                        <option disabled value="Select a day">
                                            Select a day
                                        </option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">
                                            Wednesday
                                        </option>
                                        <option value="thursday">
                                            Thursday
                                        </option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">
                                            Saturday
                                        </option>
                                    </select>
                                </div>

                                <div className="flex justify-center items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        placeholder="Sets"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Reps"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    {exercise.equipment.toLowerCase() !==
                                        "bodyweight" && (
                                        <input
                                            type="text"
                                            placeholder="Weight (kg)"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    )}
                                </div>
                                <div>
                                    <textarea
                                        className="textarea w-full resize-none textarea-bordered mt-4"
                                        placeholder="Notes"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary mt-4">
                                    Submit
                                </button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ExcerciseDetail;
