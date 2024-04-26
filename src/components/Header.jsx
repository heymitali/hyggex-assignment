const Header = () => {
  return (
    <div className="">
      <div className="2xl:px-[200px] lg:px-20 lg:py-6 px-4 py-1 flex justify-between">
        <div className="lg:w-[191px] lg:h-[39px] 2xl:w-[300px] 2xl:h-[40px] w-[150px] h-[25px] pt-[10px] md:pt-[15px]">
          <img
            src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
            className="2xl:w-[280px] 2xl:h-[60px]"
          />
        </div>
        <div className="font-light text-[#3A3740] text-[14px] lg:text-[18px] 2xl:text-[24px] text-xs flex ">
          <div className="invisible w-0 sm:visible sm:w-full flex flex-col justify-center">
            <div>
              <span className="lg:mx-4 lg:my-2 mx-3 cursor-pointer">Home</span>
              <span className="lg:mx-4 lg:my-2 mx-3 cursor-pointer">
                Flashcard
              </span>
              <span className="lg:mx-4 lg:my-2 mx-3 cursor-pointer">
                Contact
              </span>
              <span className="lg:mx-4 lg:my-2 mx-3 cursor-pointer">FAQ</span>
            </div>
          </div>
          <button className="lg:w-[128px] lg:h-[48px] mx-4 my-2 rounded-3xl lg:px-[40px] lg:py-[13px] px-[30px] py-[10px] text-white bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
