import { Button } from "../components";
import { homeText } from "../constants";

const Home = () => {
    return (
        <div className="py-30 m-10 flex">
            <div className="w-2/3">
                <p className="">{homeText.introduction}</p>
                <h1 className="uppercase text-5xl mt-5 font-bold">{homeText.name}</h1>
                <h2 className="uppercase text-5xl mt-5 text-gray-400">{homeText.role}</h2>
                <p className="w-3/4 mt-10 leading-relaxed text-justify text-2xl">{homeText.about}</p>

                <div className="flex w-2/5 justify-between mt-10">
                    <Button onClick={() => {}}>{homeText.donwloadResume}</Button>
                    <Button onClick={()=> {}}>{homeText.contact}</Button>
                </div>
            </div>

            <div className='justify-center items-center'>
                <img src="" className="w-130 h-130 rounded-full bg-amber-300" />
            </div>
        </div>
    )
}

export default Home;