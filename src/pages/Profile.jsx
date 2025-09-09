import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
const Profile = () => {
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [user, setUser] = useState(null);
    const [day, setDay] = useState(
        new Date()
            .toLocaleDateString("en-US", { weekday: "long" })
            .toLowerCase()
    );

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        setLoading(true);
        const fetchExercises = localStorage.getItem("exercises");

        setExercise(fetchExercises ? JSON.parse(fetchExercises) : []);
        setLoading(false);
    }, []);
    console.log(exercise, user);
    if (loading) {
        return <div>Loading...</div>;
    }
    const handleChange = (e) => {
        const { value } = e.target;
        if (value === "Select a day") {
            return;
        }
        if (value === "today") {
            const today = new Date();
            const todayDay = today
                .toLocaleDateString("en-US", { weekday: "long" })
                .toLowerCase();
            setDay(todayDay);
            return;
        }
        const selectedDay = value.toLowerCase();
        setDay(selectedDay);
    };

    const handleDelete = (name, day) => {
        Swal.fire({
            title: "Are you sure you want to delete this exercise?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedExercises = exercise.filter(
                    (ex) =>
                        !(
                            ex?.day === day &&
                            ex?.name === name &&
                            ex?.email === user.email
                        )
                );
                setExercise(updatedExercises);
                localStorage.setItem(
                    "exercises",
                    JSON.stringify(updatedExercises)
                );
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Exercise deleted successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };
const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = selectedExercise?.name; // from state
    const sets =
        form.querySelector("#sets").value.trim() || selectedExercise?.sets;
    const reps =
        form.querySelector("#reps").value.trim() || selectedExercise?.reps;
    let weight = form.querySelector("#weight")?.value.trim() || selectedExercise?.weight;
    const notes =
        form.querySelector("textarea").value.trim() || selectedExercise?.notes;

    if (!name || !day || !sets || !reps) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Please fill in all fields",
            showConfirmButton: false,
            timer: 1500,
        });
        return;
    }

    const updatedExercise = {
        name,
        day,
        sets,
        reps,
        weight: Number(weight),
        notes,
        email: user.email,
    };

    // Update exercises list
    const updatedExercises = (exercise || []).map((ex) => {
        if (ex?.name === name && ex?.day === day && ex?.email === user.email) {
            return updatedExercise;
        }
        return ex;
    });

    // Update state + localStorage
    setExercise(updatedExercises);
    localStorage.setItem("exercises", JSON.stringify(updatedExercises));

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Exercise updated successfully",
        showConfirmButton: false,
        timer: 1500,
    });

    form.reset();
    document.getElementById("my_modal_5").close(); // close new single modal
    setSelectedExercise(null); // clear selection
};


    // Profile display functions and handlers will go here

    // console.log(exercise);
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="py-8 px-4">
                <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                        <h1 className="lg:text-5xl text-3xl font-bold mb-6 text-white">
                            Profile Page
                        </h1>
                        <div className="relative">
                            {user.photo ? (
                                <img
                                    src={user.photo}
                                    alt={user.name}
                                    className="lg:w-48 lg:h-48 w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            ) : (
                                <div className="lg:w-48 lg:h-48 w-32 h-32 rounded-full bg-white text-black flex justify-center items-center text-5xl font-bold border-4 border-white shadow-lg">
                                    {user.name[0]}
                                    {user.name[1]}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <p className="text-xl">
                                        <span className="font-semibold">
                                            Name:
                                        </span>{" "}
                                        {user.name}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p className="text-xl">
                                        <span className="font-semibold">
                                            Email:
                                        </span>{" "}
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p className="text-xl">
                                        <span className="font-semibold">
                                            Age:
                                        </span>{" "}
                                        {user.age || "Not specified"}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                    <p className="text-xl">
                                        <span className="font-semibold">
                                            Blood Group:
                                        </span>{" "}
                                        {user.bloodGroup || "Not specified"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mb-10">
                <select
                    onChange={handleChange}
                    defaultValue="Select a day"
                    className="select w-3/4 lg:w-1/4 select-bordered bg-white text-black font-semibold"
                    required
                >
                    <option disabled value="Select a day">
                        Select a day
                    </option>
                    <option value="today">Today</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>
            </div>
            <div>
                <h1 className="capitalize mb-7 text-3xl font-semibold text-center">
                    {day}'s exercise
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
                    {exercise ? (
                        exercise.filter((ex) => ex?.day === day).length > 0 ? (
                            exercise
                                .filter(
                                    (ex) =>
                                        ex?.day === day &&
                                        ex?.email === user.email
                                )
                                .map((ex, index) => (
                                    <div
                                        key={index}
                                        className="bg-white flex flex-col lg:flex-row  text-black p-4 rounded-lg shadow-md mb-4"
                                    >
                                        {/* <div className="lg:aspect-video lg:w-96  aspect-square overflow-hidden mr-5 p-1 bg-black rounded-lg">
                                            <img
                                                className="w-full rounded-lg h-full"
                                                src={ex.exercise.imageUrl}
                                                alt=""
                                            />
                                        </div> */}
                                        <div>
                                            <h2 className="text-xl font-bold">
                                                {ex.name}
                                            </h2>
                                            <p>Sets: {ex.sets}</p>
                                            <p>Reps: {ex.reps}</p>
                                            {ex?.weight === 0 ? (
                                                <></>
                                            ) : (
                                                <p>Weight: {ex.weight} kg</p>
                                            )}

                                            <p>Notes: {ex.notes}</p>
                                            <div className="mt-4 space-x-3 space-y-2 lg:space-y-0">
                                                <Link
                                                    to={`/exercise/${ex.name}`}
                                                    className="btn"
                                                >
                                                    View Detail
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        setSelectedExercise(ex); // set current exercise
                                                        document
                                                            .getElementById(
                                                                "my_modal_5"
                                                            )
                                                            .showModal(); // open modal
                                                    }}
                                                    className="btn"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            ex.name,
                                                            day
                                                        )
                                                    }
                                                    className="btn"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                            <dialog
                                                id="my_modal_5"
                                                className="modal modal-bottom sm:modal-middle"
                                            >
                                                <div className="modal-box text-white">
                                                    {selectedExercise && (
                                                        <>
                                                            <h3 className="font-bold text-lg">
                                                                {
                                                                    selectedExercise.name
                                                                }
                                                            </h3>
                                                            <form
                                                                onSubmit={
                                                                    handleSubmit
                                                                }
                                                                className="flex flex-col"
                                                            >
                                                                <div className="flex justify-center items-center gap-2 mt-4">
                                                                    <input
                                                                        type="text"
                                                                        readOnly
                                                                        value={
                                                                            selectedExercise.name
                                                                        }
                                                                        className="input input-bordered w-full max-w-xs"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder={`${selectedExercise.sets} sets`}
                                                                        id="sets"
                                                                        className="input input-bordered w-full max-w-xs"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder={`${selectedExercise.reps} reps`}
                                                                        id="reps"
                                                                        className="input input-bordered w-full max-w-xs"
                                                                    />
                                                                    {selectedExercise.weight !==
                                                                        0 && (
                                                                        <input
                                                                            type="text"
                                                                            placeholder={`${selectedExercise.weight} kg`}
                                                                            id="weight"
                                                                            className="input input-bordered w-full max-w-xs"
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <textarea
                                                                        className="textarea w-full resize-none textarea-bordered mt-4"
                                                                        placeholder="Notes"
                                                                        rows="4"
                                                                        defaultValue={
                                                                            selectedExercise.notes
                                                                        }
                                                                    ></textarea>
                                                                </div>
                                                                <button className="btn btn-primary bg-black text-white mt-4">
                                                                    Update
                                                                </button>
                                                            </form>
                                                        </>
                                                    )}
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            <button className="btn">
                                                                Close
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p className="text-center text-white text-xl font-semibold">
                                No exercises found for this day.
                            </p>
                        )
                    ) : (
                        <p className="text-center text-white text-xl font-semibold">
                            No exercises found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
