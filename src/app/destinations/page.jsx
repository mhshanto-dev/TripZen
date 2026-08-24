import DestinationsCard from "@/components/DestinationsCard";

const destinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl m-4">
        All Destinations
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationsCard
            key={destination._id}
            destination={destination}
          ></DestinationsCard>
        ))}
      </div>
    </div>
  );
};

export default destinationsPage;
