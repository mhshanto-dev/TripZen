import DestinationsCard from "@/components/DestinationsCard";
import DestinationsSearch from "@/components/DestinationsSearch";
import Pagination from "@/components/Pagination";

// 9. Destructure searchParams asynchronously as required by Next.js 15+ App Router
const destinationsPage = async ({ searchParams }) => {
  const params = await searchParams;
  
  // 10. Build the query string by conditionally appending provided search parameters
  const query = new URLSearchParams();
  if (params.search) query.append("search", params.search);
  if (params.budget) query.append("budget", params.budget);
  if (params.duration) query.append("duration", params.duration);
  if (params.page) query.append("page", params.page);

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/destination?${query.toString()}`;

  // 11. Fetch destination data from the server, opting out of cache to ensure fresh search results
  const res = await fetch(url, {
    cache: "no-store"
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }

  const responseData = await res.json();
  
  // 12. Handle both new paginated response format and fallback to legacy array format if needed
  const destinations = responseData.data || responseData;
  const totalPages = responseData.totalPages || 1;
  const currentPage = responseData.page || 1;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
        Explore Destinations
      </h1>
      
      <DestinationsSearch />

      {destinations.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-xl text-slate-500">No destinations found matching your criteria.</p>
          <p className="mt-2 text-slate-400">Try adjusting your search filters.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationsCard
                key={destination._id}
                destination={destination}
              />
            ))}
          </div>
          
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default destinationsPage;
