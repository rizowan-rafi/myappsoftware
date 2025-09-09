import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
const Profile = () => {
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [day, setDay] = useState(
        new Date()
            .toLocaleDateString("en-US", { weekday: "long" })
            .toLowerCase()
    );

    const CLOUD_NAME = "dzywnjyll";
    const UPLOAD_PRESET = "inventory";

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
        const name = form.querySelector("input[placeholder='name']").value;
        const sets = form.querySelector("#sets").value;
        const reps = form.querySelector("#reps").value;
        const weight = form.querySelector("#weight").value;

        const notes = form.querySelector("textarea").value;

        if (!name || !day || !sets || !reps || !weight) {
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
            weight,
            notes,
            email: user.email,
        };

        const storedExercises =
            JSON.parse(localStorage.getItem("exercises")) || [];

        const updatedList = storedExercises.map((ex) => {
            if (
                ex?.name === name &&
                ex?.day === day &&
                ex?.email === user.email
            ) {
                return updatedExercise;
            }
            return ex;
        });

        localStorage.setItem("exercises", JSON.stringify(updatedList));

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Exercise updated successfully",
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset();
        document.getElementById("my_modal_5").close();
    };

    const uploadToCloudinary = async (file) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log(data);
      if (data.secure_url) {
        handleAddPhoto(data.secure_url);
      } else {
        console.error("Cloudinary upload failed:", data);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddPhoto = (url) => {
    const user=JSON.parse(localStorage.getItem("user"));
    user.photo=url;
    localStorage.setItem("user", JSON.stringify(user));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => {
        if (u.email === user.email) {
            return { ...u, photo: url };
        }
        return u;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(user);
  }

    // console.log(exercise);
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="flex flex-col gap-7 justify-center items-center h-screen ">
                <h1 className="lg:text-5xl text-3xl font-bold">Profile Page</h1>
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
                <input
  type="file"
  disabled={isUploading}
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      uploadToCloudinary(file);
    }
  }}
  className={` 
    file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 
    file:text-sm file:font-medium file:cursor-pointer
    file:bg-blue-500 file:text-white 
    hover:file:bg-blue-700 active:file:scale-95
    disabled:file:bg-gray-300 disabled:file:cursor-not-allowed
    transition-all duration-300
    ${isUploading ? "animate-pulse" : ""}
  `}
/>

                <p className="text-xl font-semibold">Name: {user.name}</p>
                <p className="text-xl font-semibold">Email: {user.email}</p>
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
                                            <p>Weight: {ex.weight} kg</p>
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
                                                        document
                                                            .getElementById(
                                                                "my_modal_5"
                                                            )
                                                            .showModal();
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
                                                    <h3 className="font-bold text-lg">
                                                        {ex.name}
                                                    </h3>
                                                    <p className="py-4">
                                                        Press ESC key or click
                                                        the button below to
                                                        close
                                                    </p>
                                                    <form
                                                        action=""
                                                        onSubmit={handleSubmit}
                                                        className="flex flex-col"
                                                    >
                                                        <div className="flex justify-center items-center  gap-2 mt-4">
                                                            <input
                                                                type="text"
                                                                placeholder="name"
                                                                className="input input-bordered w-full max-w-xs"
                                                                readOnly
                                                                value={`${ex.name}`}
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder={`${ex.sets} sets`}
                                                                id="sets"
                                                                className="input input-bordered w-full max-w-xs"
                                                            />

                                                            <input
                                                                type="text"
                                                                placeholder={`${ex.reps} reps`}
                                                                id="reps"
                                                                className="input input-bordered w-full max-w-xs"
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder={`${ex.weight} kg`}
                                                                id="weight"
                                                                className="input input-bordered w-full max-w-xs "
                                                            />
                                                        </div>
                                                        <div>
                                                            <textarea
                                                                className="textarea w-full resize-none textarea-bordered mt-4"
                                                                placeholder="Notes"
                                                                rows="4"
                                                                defaultValue={
                                                                    ex.notes
                                                                }
                                                            ></textarea>
                                                        </div>
                                                        <button className="btn btn-primary bg-black text-white mt-4">
                                                            Update
                                                        </button>
                                                    </form>
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
