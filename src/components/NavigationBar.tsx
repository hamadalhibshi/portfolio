import { images } from "../constants";

const NavigationBar = () => {
  const reload = () => {
    window.location.href = "/";
  };

  return (
    <div className="top-0 w-full md:px-5 pt-10">
      <div className="flex items-center justify-between mx-5">
        <button
          className="text-[15px] lg:text-2xl uppercase w-[40px] h-[40px] hover:opacity-50 cursor-none
        md:w-[70px] md:h-[70px]"
          onClick={reload}
        >
          <img src={images.logo} alt="logo" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
