import Footer from "@ui/landingPage/organism/Footer";
import Navbar from "@ui/landingPage/organism/Navbar";
import { Outlet } from "react-router-dom";

const LandingPageTemplate = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex justify-center items-center flex-grow bg-[#CCE4FF] custom:bg-[#CCE4FF] md:bg-split-gradient">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPageTemplate;
