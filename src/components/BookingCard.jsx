"use client";

import { authClient } from "@/lib/auth-client";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    _id,
    price,
    destinationName,
    departureDate,
    country,
    category,
    duration,
    imageUrl,
    description,
  } = destination;

  const formattedDate = new Date(departureDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleBooking = async () => {
    if (!user) {
      alert("Please login first to book this destination.");
      return;
    }

    const bookingData = {
      userId: user.id,
      destinationId: _id,
      destinationName,
      imageUrl,
      departureDate,
      country,
      category,
      duration,
      description,
    };

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      console.log("Booking Response:", data);
    } catch (error) {
      console.error("Booking Error:", error);
    }
  };

  return (
    <aside className="lg:sticky lg:top-6 lg:h-fit">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7">
        {/* Price */}
        <div className="border-b border-slate-100 pb-5">
          <p className="text-sm text-slate-500">Starting from</p>

          <div className="mt-1 flex items-end gap-2">
            <span className="text-4xl font-bold text-cyan-600">${price}</span>

            <span className="pb-1 text-sm text-slate-400">/ person</span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="space-y-4 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Destination</span>

            <span className="max-w-36 truncate text-right text-sm font-semibold text-slate-800">
              {destinationName}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Country</span>

            <span className="text-sm font-semibold text-slate-800">
              {country}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Duration</span>

            <span className="text-sm font-semibold text-slate-800">
              {duration}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Departure</span>

            <span className="text-sm font-semibold text-slate-800">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleBooking}
            className="w-full rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-cyan-600 hover:shadow-lg sm:text-base"
          >
            Book Now
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Secure booking • No hidden fees
        </p>
      </div>
    </aside>
  );
};

export default BookingCard;
