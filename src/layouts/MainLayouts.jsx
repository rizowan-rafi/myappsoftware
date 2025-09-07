import NavBar from "../components/NavBar.jsx";
import Banner from "../components/Banner.jsx";
import { Outlet } from "react-router";
import Modal from "../components/Modal.jsx";
import {useState} from 'react'
const MainLayouts = () => {
     const [count,setCount] = useState(0)
    return (
        <>
            <header className="relative">
                <nav className="absolute top-0 left-0 right-0 z-50">
                    <NavBar></NavBar>
                </nav>
                <section>
                    <Banner></Banner>
                </section>
            </header>
            
            {!count ? <Modal></Modal>: setCount(count+1)}
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    );
};

export default MainLayouts;
