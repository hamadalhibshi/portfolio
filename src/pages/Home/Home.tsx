import { homeText } from "../../constants";
import { Experience, Projects, Technologies } from "./components";

const Home = () => {
    return (
        <div>
            <div className="py-30 m-10 flex border-b border-neutral-800 pb-24">
                <div className="w-2/3">
                    <p className="">{homeText.introduction}</p>
                    <h1 className="flex uppercase text-5xl mt-5 font-bold text-neutral-50">
                        {homeText.name}
                    </h1>
                    <h1 className="bg-gradient-to-r from-pink-300 to-purple-500 uppercase text-5xl mt-5 via-slate-500 text-transparent bg-clip-text">{homeText.role}</h1>
                    <p className="w-3/4 mt-10 leading-relaxed text-justify text-2xl">{homeText.about}</p>
                </div>

                <div className='justify-center items-center'>
                    <img src="" className="w-130 h-130 rounded-full bg-amber-300" />
                </div>
            </div>
        {/* <Technologies /> */}
        <Experience />
        <Projects />
        </div>
    )
}

export default Home;
