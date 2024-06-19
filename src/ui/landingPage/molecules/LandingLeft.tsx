const LandingLeft = () => {
  return (
    <div className='flex flex-col items-center justify-center  text-center'>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold leading-tight'>
          Technology is a useful servant but a dangerous master.
        </h1>
      </div>

      <div className='flex gap-x-3 justify-center items-center mt-10'>
        <div className=''>
          <p className='text-2xl font-bold'>154K</p>
          <p>Employees</p>
        </div>
        <div>
          <p className='text-2xl font-bold'>$382B</p>
          <p>Revenue</p>
        </div>
      </div>
    </div>
  )
}

export default LandingLeft
