import { DeleteAlert } from "@/components/DeleteAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { headers } from "next/headers";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">My Bookings</h1>

        <p className="mt-4 text-slate-500">
          Please login to see your bookings.
        </p>
      </div>
    );
  }

  const res = await fetch(
    `http://localhost:5000/booking/user/${session.user.id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const bookings = await res.json();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">My Bookings</h1>

      <div className="mt-6">
        {bookings.length === 0 ? (
          <p className="text-slate-500">No bookings found.</p>
        ) : (
          // Booking informatio
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                    {booking.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Destination Name */}
                  <h2 className="text-2xl font-bold text-slate-900">
                    {booking.destinationName}
                  </h2>

                  {/* Country */}
                  <p className="mt-1 text-sm text-slate-500">
                    📍 {booking.country}
                  </p>

                  {/* Info */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {/* Departure */}
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Departure
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        📅{" "}
                        {new Date(booking.departureDate).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        🕐 {booking.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
                    {booking.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs text-slate-400">Booking Status</p>

                      <p className="mt-1 text-sm font-semibold text-green-600">
                        ✓ Confirmed
                      </p>
                    </div>

                    <DeleteAlert booking={booking}/>


                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;
