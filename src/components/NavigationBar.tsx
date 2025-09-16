import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { images } from "../constants";

const NavigationBar = () => {
  const iconClass =
    "flex rounded-lg w-10 h-10 md:w-12 md:h-12 items-center justify-center cursor-none hover:opacity-50";

  const openGithubUrl = () => {
    window.open("https://github.com/hamadalhibshi", "_blank");
  };

  const openLinkedinUrl = () => {
    window.open("https://www.linkedin.com/in/halhibshi/", "_blank");
  };

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

        <div>
          <button onClick={openGithubUrl}>
            <div className={iconClass}>
              <LuGithub className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            </div>
          </button>

          <button onClick={openLinkedinUrl}>
            <div className={iconClass}>
              <TiSocialLinkedin className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
