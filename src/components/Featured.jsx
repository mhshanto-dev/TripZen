
import { Button, Card } from "@heroui/react";
import Link from "next/link";

const FeaturedSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();

  console.log(destinations);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore The World
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Destinations
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link href="/destinations">
            <Button
              color="primary"
              variant="flat"
              className="w-fit font-semibold"
            >
              All Destinations
            </Button>
          </Link>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations?.map((destination) => (
            <Card
              key={destination._id}
              className="group overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={destination.imageUrl}
                  alt={destination.destinationName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                  {destination.category}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-3 py-2 text-sm font-bold text-white backdrop-blur-sm">
                  ${destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                  {destination.destinationName}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  {destination.country}
                </p>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                  {destination.description}
                </p>

                {/* Duration */}
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {destination.duration}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {destinations?.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500">
              No featured destinations found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;

