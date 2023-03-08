import Image from "next/image";

const Places = ({ places }) => {
  return (
    <section className="container mx-auto mt-20 " data-aos="zoom-in">
      <h1 className="text-3xl text-center font-medium text-neutral-500">
        Popular Places
      </h1>

      <dl className="grid sm:grid-cols-4 justify-items-center sm:px-28 gap-5 mt-5">
        {places.map((place) => (
          <div
            key={place?._id}
            className="card w-60 h-60 bg-base-100 shadow-xl image-full hover:cursor-pointer "
          >
            <figure>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src={place.image}
                alt="city"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{place.name}</h2>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Places;
