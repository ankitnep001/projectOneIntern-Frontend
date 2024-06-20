import LandingLeft from "../molecules/LandingLeft"
import LandingRight from "../molecules/LandingRight"

const Hero = () => {
    return (
        <section className=' flex justify-center items-center px-10 py-20 bg-[#E7F0FF]'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-1/2 p-2'>
                    <LandingLeft />
                </div>
                <div className='w-full md:w-2/2 p-2'>
                    <LandingRight />
                </div>
            </div>
        </section>
    )
}

export default Hero
