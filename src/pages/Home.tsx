import { Button } from "../components";
import { homeText } from "../constants";

const Home = () => {
    return (
        <div className="py-30 m-10">
            <p className="">{homeText.introduction}</p>
            <h1 className="uppercase text-4xl mt-5 font-bold">{homeText.name}</h1>
            <h2 className="uppercase text-4xl mt-5 text-gray-400">{homeText.role}</h2>
            <p className="w-2/4 mt-5 leading-relaxed text-justify text-2xl">{homeText.about}</p>

            <div className="flex w-1/4 justify-between mt-10">
                <Button onClick={() => {}}>
                    Download Resume
                </Button>

                <Button onClick={()=> {}}>
                    Contact Me
                </Button>
            </div>
        </div>
    )
}

export default Home;