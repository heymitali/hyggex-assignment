const Header = () => {
  return (
    <div>
      <div className="mx-20 my-6 flex justify-between">
        <div className=" w-[191px] h-[39px]">
          <img src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" />
        </div>
        <div className="font-light text-[#3A3740] text-[18px]">
          <span className="mx-4 my-2 cursor-pointer">Home</span>
          <span className="mx-4 my-2 cursor-pointer">Flashcard</span>
          <span className="mx-4 my-2 cursor-pointer">Contact</span>
          <span className="mx-4 my-2 cursor-pointer">FAQ</span>
          <button className="w-[128px] h-[48px] mx-4 my-2 rounded-3xl px-[40px] py-[13px] text-white bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
