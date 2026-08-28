
import BookingCard from "@/components/BookingCard";
import { DeleteAlertDialog } from "@/components/DeleteAlertDialog";
import EditModal from "@/components/EditModal";


const DetailsPage = async ({ params }) => {


  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch destination details");
  }

  const destination = await res.json();

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    departureDate,
    country,
    category,
    duration,
    description,
  } = destination;

  

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= ACTION BUTTONS ================= */}
        <div className="mb-5 flex items-center justify-end gap-3">
          {/* Edit Button */}
          <EditModal destination={destination} />

          {/* Delete Button */}
          <DeleteAlertDialog destination={destination} />
        </div>
        {/* ================= HERO IMAGE ================= */}
        <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96 lg:h-[500px]">
          <img
            src={imageUrl}
            alt={destinationName}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg sm:left-7 sm:top-7 sm:text-sm">
            {category}
          </span>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8 lg:p-10">
            <p className="mb-2 text-sm font-medium text-cyan-300 sm:text-base">
              📍 {country}
            </p>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {destinationName}
            </h1>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 lg:col-span-2">
            {/* Description */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                About This Destination
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {description ||
                  "Experience an unforgettable journey to this beautiful destination. Explore amazing places, enjoy the local culture and create memories that will last a lifetime."}
              </p>
            </section>

            {/* Destination Information */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Destination Information
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Country */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Country
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    🌍 {country}
                  </p>
                </div>

                {/* Category */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Category
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    🏷️ {category}
                  </p>
                </div>

                {/* Duration */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Duration
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    🕐 {duration}
                  </p>
                </div>

                {/* Departure */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Departure Date
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    📅 {departureDate}
                  </p>
                </div>
              </div>
            </section>
          </div>
                  <BookingCard destination={destination} />

        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
