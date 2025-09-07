import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";

const NavigationBar = () => {
  const iconClass =
    "flex rounded-lg w-12 h-12 items-center justify-center cursor-pointer hover:bg-blue-700";

  const openGithubUrl = () => {
    window.open("https://github.com/hamadalhibshi", "_blank");
  };

  const openLinkedinUrl = () => {
    window.open("https://www.linkedin.com/in/halhibshi/", "_blank");
  };

  return (
    <div className="top-0 w-full p-5 pt-10">
      <div className="flex items-center justify-between ml-5 mr-5">
        <div className="text-2xl uppercase">
          <a href="/">Hamad Alhibshi</a>
        </div>

        <div>
          <button onClick={openGithubUrl}>
            <div className={iconClass}>
              <LuGithub size={30} />
            </div>
          </button>

          <button onClick={openLinkedinUrl}>
            <div className={iconClass}>
              <TiSocialLinkedin size={30} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
