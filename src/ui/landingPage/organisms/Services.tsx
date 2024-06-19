import office from '@assets/images/office.png'
const Services = () => {
    return (
        <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-10 items-center px-10 py-10  bg-slate-50'>
            <div className='flex-1'>
                <h1 className="text-2xl">Our Services</h1>
                <p className='w-full text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cupiditate fugiat accusantium
                    commodi minus quam blanditiis quos adipisci nesciunt fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos et debitis dolorum repellat voluptas fuga perferendis aliquam delectus cum.
                </p>
            </div>

            <div className=' flex-1  object-cover  '>
                <img src={office} alt="" />
            </div>
        </div>
    )
}

export default Services
