import { techCardsConst } from "../../../constants";

const TechCards = () => {
  return (
    <div className="flex justify-evenly py-20">
      {techCardsConst.map((tech, index) => (
        <div
          className="p-10 w-[18%] min-h-[350px] rounded-3xl 
        shadow-[0_10px_30px_rgba(107,33,168,0.6)] 
        hover:shadow-[0_15px_40px_rgba(107,33,168,0.8)] 
        transition-shadow duration-300 flex flex-col items-center border-[1px]"
          key={index}
        >
          <div className="w-[90%] h-[50%] mb-10">
            <img
              src={tech.image}
              alt="React Native"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex justify-center items-center w-full">
            <span className="text-xl font-bold text-center">{tech.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCards;
