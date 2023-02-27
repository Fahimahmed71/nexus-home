import headerImageGif from "../../../assets/Tiny house.gif";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="sm:pl-14 sm:p-0 p-5">
      <dl className="flex sm:flex-row flex-col justify-between items-center">
        <dt>
          <h1 className="sm:text-7xl text-3xl font-semibold text-neutral-400 text-center sm:text-start">
            Welcome To
            <span className="text-sky-400">
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
        </dt>
        <Image src={headerImageGif} alt="headerImageGif" />
      </dl>

      <dl>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </dl>
    </header>
  );
};

export default Header;
