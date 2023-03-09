import headerImageGif from "../../../assets/Tiny house.gif";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="container mx-auto relative">
      <div className="w-[600px] h-[500px] -top-24 left-[10%] opacity-25 bg-gradient-to-b from-cyan-400  to-white -z-10 blur-3xl absolute rounded-full sm:block hidden"></div>
      <dl className="flex sm:flex-row flex-col justify-between items-center">
        <dt>
          <h1 className="sm:text-7xl text-3xl font-semibold text-neutral-400 text-center sm:text-start">
            Welcome To
            <span className="text-sky-400 ">
              <Typewriter
                options={{
                  strings: ["Nexus", "Home"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="capitalize mt-5 tracking-widest text-gray-400 text-center sm:text-start">
            Find your best smart real estate
          </p>

          <button className="btn btn-primary mt-5 block sm:mx-0 mx-auto">
            view property
          </button>
        </dt>
        <Image src={headerImageGif} alt="headerImageGif" />
      </dl>
    </header>
  );
};

export default Header;
