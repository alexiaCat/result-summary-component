

export const Results = () => {
  return (
    <div className="bg-neutral-white font-hanken-grotesk w-screen h-screen flex flex-col justify-center items-center">

      <div className="flex flex-col md:flex-row w-[100%] md:w-[700px] h-screen md:h-[500px] rounded-3xl shadow-xl">

        <div className="bg-gradient-to-bl from-gradients-light-slate-blue-bg to-gradients-light-royal-blue-bg rounded-t-none rounded-b-3xl md:rounded-3xl w-full md:w-[50%] flex flex-col items-center">
          <h3 className="text-neutral-light-lavender text-[18px] md:text-[22.5px] py-5 md:py-8">Your Result</h3>
          <div className="bg-gradient-to-b from-gradients-violet-blue-circle to-gradients-persian-blue-circle rounded-full w-[145px] h-[145px] md:h-[195px] md:w-[195px] flex flex-col justify-center items-center">
            <h1 className="text-neutral-white text-[54px] md:text-[71px] font-extrabold">76</h1>
            <h4 className="text-neutral-light-lavender text-[16px] md:text-[18px]">of 100</h4>
          </div>
          <h2 className="text-neutral-white text-[25px] md:text-[31.5px] pt-3 md:pt-6">Great</h2>
          <p className="text-neutral-light-lavender text-[16px] md:text-[18px] md:mt-4 mb-9 md:mb-0  px-[45px] text-center">You scored higher than 65% of the people who have taken these tests.</p>
        </div>



        <div className="bg-neutral-white font-bold rounded-3xl w-full md:w-[50%] p-7 md:p-8">
          <h3 className="text-neutral-dark-gray-blue text-[18.5px] md:text-[22.5px]">Summary</h3>

          <div className="bg-primary-light-red-75 text-[18px] py-3 my-5 rounded-lg flex justify-between items-center">
            <p className="flex items-center reaction text-primary-light-red">
              Reaction
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-neutral-dark-gray-blue">80</span>
              <span className="text-gray-400 pr-3">/ 100</span>
            </p>
          </div>



          <div className="bg-primary-orangey-yellow-80 text-[18px] py-3 rounded-lg flex justify-between items-center mb-4">
            <p className="flex items-center memory text-primary-orangey-yellow">
              Memory
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-neutral-dark-gray-blue">92</span>
              <span className="text-gray-400 pr-3">/ 100</span>
            </p>
          </div>

          <div className="bg-primary-green-teal-80 text-[18px] py-3 rounded-lg flex justify-between items-center mb-4">
            <p className="flex items-center verbal text-primary-green-teal">
              Verbal
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-neutral-dark-gray-blue">61</span>
              <span className="text-gray-400 pr-3">/ 100</span>
            </p>
          </div>

          <div className="bg-primary-cobalt-blue-80 text-[18px] py-3 rounded-lg flex justify-between items-center mb-4">
            <p className="flex items-center visual text-primary-cobalt-blue">
              Visual
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-neutral-dark-gray-blue">72</span>
              <span className="text-gray-400 pr-3">/ 100</span>
            </p>
          </div>

          <button className="bg-neutral-dark-gray-blue hover:bg-gradient-to-r from-gradients-light-slate-blue-bg to-gradients-light-royal-blue-bg text-neutral-white py-4 w-[100%] md:mt-10 mt-4 rounded-full transition duration-300 ease-in-out">
            Continue
          </button>


        </div>
      </div>
    </div>
  )
}
