import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { notFoundStrings } from "../constants";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-lg">
        {notFoundStrings.error}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        {notFoundStrings.message}
      </h2>
      <p className="text-center text-sm md:text-base mb-6 text-gray-300 max-w-md">
        {notFoundStrings.description}
      </p>
      <Button onClick={() => navigate("/")}>
        {notFoundStrings.homeButton}
      </Button>
    </div>
  );
};

export default NotFound;
