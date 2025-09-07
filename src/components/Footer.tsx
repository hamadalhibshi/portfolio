import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="mt-20 text-2xl text-center">{footer.title}</h1>
      <p className="my-10 text-4xl text-center">Let's Work Together!</p>
      <div className="text-center text-2xl tracking-tighter max-w-2xl mx-auto">
        <p className="my-4">{footer.description}</p>
      </div>
      <div className="flex py-10 justify-center">
        <button className="py-5 px-10 border-purple-800 border-2 rounded-md text-center hover:bg-purple-800">
          <span className="font-semibold text-sm">{footer.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
