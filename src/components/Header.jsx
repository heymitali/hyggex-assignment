const Header = () => {
  return (
    <div>
      <div className="mx-20 my-6 flex justify-between">
        <div className="w-[123px] h-full lg:w-48 lg:h-9">
          <img src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" />
        </div>
        <div className="">
          <span className="mx-4 my-2">Home</span>
          <span className="mx-4 my-2">Flashcard</span>
          <span className="mx-4 my-2">Contact</span>
          <span className="mx-4 my-2">FAQ</span>
          <button className=" mx-4 my-2 rounded-3xl px-4 py-1 text-white bg-[#05286e] w-28">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
