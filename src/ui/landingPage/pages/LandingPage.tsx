import LandingLeft from "../molecule/LandingLeft";
import LandingRight from "../molecule/LandingRight";

const LandingPage = () => {
    return (
        <section className=" mt-2 px-10 h-full ">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-2">
                    <LandingLeft />
                </div>
                <div className="w-full md:w-2/2 p-2">
                    <LandingRight />
                </div>
            </div>
        </section>
    );
};

export default LandingPage;