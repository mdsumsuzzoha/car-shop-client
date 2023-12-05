import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Footer from "../components/Footer/Footer";



const Root = () => {

    return (
        <div className="">
            <div
                style={{ background: 'linear-gradient(to top right, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className="px-4 md:px-10">
                <Banner></Banner>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// style={{
//     backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(67, 67, 247, 0.5)),url(${bannerImg}`,
//     backgroundSize: 'cover',
// }}