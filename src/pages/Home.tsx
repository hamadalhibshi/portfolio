import { Button } from "../components";
import { homeText } from "../constants";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";

const Home = () => {
    const iconClass = 'flex bg-blue-500 rounded-lg w-12 h-12 items-center justify-center cursor-pointer hover:bg-blue-700';

    const openGithubUrl = () => {
        window.open('https://github.com/hamadalhibshi', '_blank')
    }

    const openLinkedinUrl = () => {
        window.open('https://www.linkedin.com/in/halhibshi/', '_blank')
    }


    return (
        <div className="py-30 m-10 flex">
            <div className="w-2/3">
                <p className="">{homeText.introduction}</p>
                <h1 className="uppercase text-5xl mt-5 font-bold">{homeText.name}</h1>
                <h1 className="uppercase text-5xl mt-5 text-gray-400">{homeText.role}</h1>
                <p className="w-3/4 mt-10 leading-relaxed text-justify text-2xl">{homeText.about}</p>

                <div className="flex w-2/5 justify-between mt-10">
                    <Button onClick={() => {}}>{homeText.donwloadResume}</Button>
                    <Button onClick={()=> {}}>{homeText.contact}</Button>
                </div>

                <div className="flex mt-10 items-center justify-between w-30">
                    <a onClick={openGithubUrl}>
                        <div className={iconClass}>
                            <LuGithub size={30} />
                        </div>
                    </a>

                    <a onClick={openLinkedinUrl}>
                        <div className={iconClass}>
                            <TiSocialLinkedin size={35} />
                        </div>
                    </a>
                </div>
            </div>

            <div className='justify-center items-center'>
                <img src="" className="w-130 h-130 rounded-full bg-amber-300" />
            </div>
        </div>
    )
}

export default Home;
