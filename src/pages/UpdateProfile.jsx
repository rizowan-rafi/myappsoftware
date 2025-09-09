import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, isLoading] = useState(false);

    const CLOUD_NAME = "dzywnjyll";
    const UPLOAD_PRESET = "inventory";

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setImagePreview(parsedUser.photo);
        }
    }, []);

    const uploadToCloudinary = async (file) => {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        try {
            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();

            if (data.secure_url) {
                setImagePreview(data.secure_url);
                return data.secure_url;
            } else {
                console.error("Cloudinary upload failed:", data);
                return null;
            }
        } catch (err) {
            console.error("Upload error:", err);
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        // Get form values
        const name = form.name.value;
        const age = form.age.value;
        const email = form.email.value;
        const bloodGroup = form.bloodGroup.value;
        const file = form.photo.files[0];

        let photoUrl = user?.photo;
        if (file) {
            photoUrl = await uploadToCloudinary(file);
            if (!photoUrl) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to upload image",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }
        }

        // Create updated user object
        const updatedUser = {
            ...user,
            name,
            age,
            email,
            bloodGroup,
            photo: photoUrl,
        };

        // Update in localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Update in users array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map((u) => {
            if (u.email === user.email) {
                return updatedUser;
            }
            return u;
        });
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile updated successfully",
            showConfirmButton: false,
            timer: 1500,
        });

        navigate("/profile");
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen bg-black/80">
                <div className="flex flex-col items-center space-y-4">
                    <span className="loading loading-spinner loading-lg text-white"></span>
                    <p className="text-white text-lg font-semibold">
                        please wait...
                    </p>
                </div>
            </div>
        );
    }
    if (isUploading) {
        return (
            <div className="flex items-center justify-center h-screen bg-black/80">
                <div className="flex flex-col items-center space-y-4">
                    <span className="loading loading-spinner loading-lg text-white"></span>
                    <p className="text-white text-lg font-semibold">
                        please wait...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className="min-h-screen py-8 px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">
                            Update Profile
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Profile Picture */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-4xl text-gray-500">
                                                {user.name
                                                    ? user.name[0].toUpperCase()
                                                    : "?"}
                                            </span>
                                        </div>
                                    )}
                                    <label className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer shadow-lg hover:bg-blue-600 transition-all">
                                        <input
                                            type="file"
                                            name="photo"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const preview =
                                                        URL.createObjectURL(
                                                            file
                                                        );
                                                    setImagePreview(preview);
                                                }
                                            }}
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </label>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Click the camera icon to change profile
                                    picture
                                </p>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user.name}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user.email}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    defaultValue={user.age}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Blood Group */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Blood Group
                                </label>
                                <select
                                    name="bloodGroup"
                                    defaultValue={user.bloodGroup || ""}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => navigate("/profile")}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white bg-black"
                                    disabled={isUploading}
                                >
                                    {isUploading
                                        ? "Uploading..."
                                        : "Update Profile"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
