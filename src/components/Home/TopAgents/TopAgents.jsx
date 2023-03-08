import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TopAgents = ({ agents }) => {
  return (
    <section className="container mx-auto mt-20 " data-aos="zoom-in">
      <h1 className="text-3xl text-center font-medium text-neutral-500">
        Meet Our Agents
      </h1>

      <dl className="mt-10 grid sm:grid-cols-6 gap-5 sm:px-0 px-10">
        {agents.slice(0, 6).map((agent) => (
          <div
            key={agent._id}
            className="ring-1 ring-gray-300 sm:w-full w-60 mx-auto"
          >
            <Link href="/" className="group relative block overflow-hidden">
              <Image
                src={agent.image}
                width={500}
                height={500}
                alt="agents"
                className=" object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <dt className="relative border border-gray-100 bg-white">
                <h1 className="text-center mt-1 font-semibold text-neutral">
                  {agent.name}
                </h1>
              </dt>
            </Link>

            <div className="flex justify-around mt-3 pb-2">
              <FaFacebookF className="text-xl text-neutral-500 hover:text-accent cursor-pointer" />
              <FaTwitter className="text-xl text-neutral-500 hover:text-accent cursor-pointer" />
              <FaLinkedinIn className="text-xl text-neutral-500 hover:text-accent cursor-pointer" />
              <AiFillInstagram className="text-xl text-neutral-500 hover:text-accent cursor-pointer" />
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default TopAgents;
