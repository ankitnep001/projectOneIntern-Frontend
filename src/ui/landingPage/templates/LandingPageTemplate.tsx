import Footer from "@ui/landingPage/organism/Footer";
import Navbar from "@ui/landingPage/organism/Navbar";
import { Outlet } from "react-router-dom";
const LandingPageTemplate = () => {
    return (
        <div className="bg-[#07343e] text-white">
            <div><Navbar /></div>
            <div><Outlet /></div>
            <div><Footer /></div>
        </div>
    )
}

export default LandingPageTemplate
