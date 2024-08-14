import Image from "next/image";
import Button from "@/components/Button";
import NavLinks from "@/components/NavLinks";
import SocialIcon from "./SocialIcon";

interface dark{
  isDarkMode:boolean
}

const ContactSection = ({isDarkMode}:dark) => {
  return (
    <>
      <div
        id="contact"
        className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex mt-22"
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div className="overflow-hidden text-3xl lg:text-6xl font-semibold tracking-wide flex justify-center">
            <h1 className="expo6 translate-y-full rotate-45 origin-left h-20">
              Lets Design Together
            </h1>
          </div>
          <p className="reveal7 opacity-0 scale-0 mt-2 lg:mt-6 text-center w-2/3 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            quaerat ex, deserunt quam at quidem eum architecto quod eaque facere
            reiciendis consequuntur.
          </p>
          <div className="flex sm:felx-col justify-center mt-12 items-center gap-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="expand py-3 px-4 rounded-md w-2/5 border border-[#AFAFAF]"
            />
            <Button />
          </div>
          <div className="flex justify-center mt-8 lg:mt-52">
            <Image
              src={
                isDarkMode ? "/images/logo-dark.svg" : "/images/logo-light.svg"
              }
              alt="Logo"
              width={200}
              height={40}
            />
          </div>
          <div className="mx-auto mt-14">
            <NavLinks isDarkMode={isDarkMode} />
          </div>
          <div className="flex justify-center my-6 gap-4"><SocialIcon isDarkMode={isDarkMode}/></div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
