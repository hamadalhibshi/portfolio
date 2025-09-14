import { footer } from "../constants";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="mt-20 text-2xl sm:text-2xl md:text-2xl text-center">
        {footer.title}
      </h1>
      <p className="my-10 text-4xl sm:text-3xl md:text-4xl text-center">
        Let's Work Together!
      </p>
      <div className="text-center text-2xl sm:text-xl md:text-2xl tracking-tighter max-w-2xl mx-auto px-2">
        <p className="my-4">{footer.description}</p>
      </div>
      <div className="flex py-10 justify-center">
        <Button>
          <span className="font-semibold text-sm sm:text-sm md:text-sm">
            {footer.buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
