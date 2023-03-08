import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const FeaturedProperties = () => {
  const propertys = [
    {
      id: "101",
      title: "Real Luxury Family House Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 150000,
      disc: {
        bedroom: "6 Bedrooms",
        bathrooms: "3 Bathrooms",
        size: "720 sq ft",
        garages: "2 Garages",
      },
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "102",
      title: "Real Luxury Family House Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 150000,
      disc: {
        bedroom: "6 Bedrooms",
        bathrooms: "3 Bathrooms",
        size: "720 sq ft",
        garages: "2 Garages",
      },
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "103",
      title: "Real Luxury Family House Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 150000,
      disc: {
        bedroom: "6 Bedrooms",
        bathrooms: "3 Bathrooms",
        size: "720 sq ft",
        garages: "2 Garages",
      },
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "104",
      title: "Real Luxury Family House Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 150000,
      disc: {
        bedroom: "6 Bedrooms",
        bathrooms: "3 Bathrooms",
        size: "720 sq ft",
        garages: "2 Garages",
      },
      image:
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <section className="container mx-auto mt-20" data-aos="fade-right">
      <h1 className="text-3xl text-center font-medium text-neutral-500">
        Featured Properties
      </h1>
      <dl className="mt-10 grid sm:grid-cols-2 gap-5 sm:px-0 px-5">
        {propertys.map((property) => (
          <dl>
            {/* hide in small window */}
            <dt className="sm:block hidden">
              <div
                key={property.id}
                className="card card-side bg-base-100 shadow-xl"
              >
                <figure>
                  <Image
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                    src={property.image}
                    alt="image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{property.title}</h2>
                  <p>{property.location}</p>
                  <div className="flex gap-2 items-center">
                    <h1>{property.disc.bedroom}</h1>
                    <h1>{property.disc.bathrooms}</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1>{property.disc.size}</h1>
                    <h1>{property.disc.garages}</h1>
                  </div>
                  <h1>$ {property.price}</h1>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">CheckIn</button>
                  </div>
                </div>
              </div>
            </dt>

            {/* show in small window */}
            <dt className="sm:hidden block mx-auto">
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <Image
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                    src={property.image}
                    alt="image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{property.title}</h2>
                  <p>{property.location}</p>
                  <div className="flex gap-2 justify-between flex-wrap items-center">
                    <h1 className="">{property.disc.bedroom}</h1>
                    <h1 className="">{property.disc.bathrooms}</h1>

                    <h1 className="">{property.disc.size}</h1>
                    <h1 className="">{property.disc.garages}</h1>
                  </div>
                  <h1 className="">$ {property.price}</h1>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">CheckIn</button>
                  </div>
                </div>
              </div>
            </dt>
          </dl>
        ))}
      </dl>
      <div className="flex justify-center">
        <button className="btn flex gap-2 mt-5 btn-primary hover:animate-pulse">
          Show more
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
