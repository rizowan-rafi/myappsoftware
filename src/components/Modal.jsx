import React, { useEffect, useState } from "react";
import {useNavigate,useLocation} from 'react-router'
import modal from '../assets/modal.jpg'
const Modal = () => {
    const location = useLocation()
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null)
    useEffect(() => {
        const user1 = localStorage.getItem("user");
        setUser(user1)
        if (user && location.search === "?new") {
            setShowModal(true);
        }
    }, [user,location]);

    useEffect(() => {
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            if (showModal) {
                modal.showModal();
            } else {
                modal.close();
            }
        }
    }, [showModal]);

    return (
        <dialog id="my_modal_1" className="modal">
            <div></div>
            <div className="modal-box">
                <div className='w-full  flex justify-center items-center mb-5'>
                    <img src={modal} className="w-56" alt="" />
                </div>
                <h3 className="font-bold text-lg">
                    Welcome to Gym tracing system!
                </h3>
                <p className="py-4">
                    Choose Your Workout. Track Your Progress. Transform Your
                    Life.
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button
                            className="btn"
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            close
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
