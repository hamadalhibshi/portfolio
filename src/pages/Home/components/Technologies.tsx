import { FaReact, FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  const iconClass = 'p-4';

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="text-3xl text-center">Technologies</h1>

      <div className="flex justify-center mt-10">
        <div className={iconClass}>
          <FaReact size={70} />
        </div>

        <div className={iconClass}>
          <FaNodeJs size={70}/>
        </div>
      </div>
    </div>
  )
}

export default Technologies;