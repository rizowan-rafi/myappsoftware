import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {Link} from "react-router";
const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [allexercises, setAllExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch("/exercises.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setExercises(data);
                setAllExercises(data);
                setBodyParts(
                    Array.from(
                        new Set(
                            data.flatMap((exercise) => exercise.muscleGroup)
                        )
                    )
                );
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, []);

    const searchExercise = (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm) {
            const filteredExercises = allexercises.filter((exercise) =>
                exercise.name.toLowerCase().includes(searchTerm) || exercise.muscleGroup.some((group) =>
                    group.toLowerCase().includes(searchTerm) || exercise.equipment.toLowerCase().includes(searchTerm) ||
                    exercise.difficulty.toLowerCase().includes(searchTerm)
                )
            );
            setExercises(filteredExercises);
        } else {
            setExercises(allexercises);
        }
    };

    const handleSelectChange = (e) => { 
        const selectedPart = e.target.value;
        if (selectedPart === "Sort by bodyPart" || selectedPart === "all exercise") {
            setExercises(allexercises);
        } else {
            const filteredExercises = allexercises.filter((exercise) =>
                exercise.muscleGroup.includes(selectedPart)
            );
            setExercises(filteredExercises);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    // console.log(exercises);

    return (
        <>
            <nav>
                <NavBar></NavBar>
            </nav>
            <main>
                <section className=" text-white p-10 flex flex-col lg:flex-row gap-3 justify-between items-center mb-5">
                    <div className="">
                        <select
                            defaultValue="Sort by bodyPart"
                            className="select select-bordered  w-full max-w-xs mr-5"
                            onChange={handleSelectChange}
                        >
                            <option disabled={true}>Sort by bodyPart</option>
                            <option value="all exercise">All Exercise</option>
                            {bodyParts.map((part) => (
                                <option key={part} value={part}>
                                    {part}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search for exercises"
                            className="input input-neutral placeholder:font-semibold placeholder:text-black bg-white font-semibold text-black w-full max-w-xs mb-5"
                            onChange={searchExercise}
                        />
                    </div>
                </section>
                <section className="lg:p-10 p-4 text-black">
                    <h1 className="text-3xl font-bold mb-5 text-white">
                        Exercises
                    </h1>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="grid grid-cols-1 gap-6 justify-center items-center">
                        {exercises.map((exercise) => (
                            <div
                                key={exercise.name}
                                className="bg-white h-full p-5 rounded-lg gap-3 shadow-md flex lg:flex-row flex-col items-center lg:items-start lg:justify-between lg:gap-0 lg:shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="lg:aspect-video lg:w-96  aspect-square overflow-hidden mr-5 p-1 bg-black rounded-lg">
                                    <img
                                        className="w-full rounded-lg h-full text-white"
                                        src={exercise.imageUrl}
                                        alt={exercise.name}
                                    />
                                </div>
                                <div className="flex flex-col justify-between items-start w-full lg:w-auto">
                                    <h2 className="text-2xl  font-semibold mb-2">
                                        {exercise.name}
                                    </h2>
                                    <div className="flex items-center  mb-2">
                                        <p className="border-r-2 pr-2">
                                            {exercise.difficulty}
                                        </p>
                                        <p className="pl-2  px-2 rounded-lg ml-2 w-50">
                                            {exercise.equipment}
                                        </p>
                                    </div>
                                    <p>
                                        {exercise.muscleGroup.map(
                                            (group, index) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-black badge-primary mr-2"
                                                >
                                                    {group}
                                                </span>
                                            )
                                        )}
                                    </p>
                                    <div className="mt-3 lg:hidden">
                                        <Link
                                            to={`/exercise/${exercise.name}`}
                                            className="btn btn-primary bg-black mt-3"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full h-full  hidden text-center  lg:flex lg:justify-end items-center lg:mr-10">
                                    <Link
                                        to={`/exercise/${exercise.name}`}
                                        className="btn btn-primary bg-black mt-3"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Exercises;
