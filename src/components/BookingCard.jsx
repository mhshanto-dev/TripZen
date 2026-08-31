"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  // 13. Maintain local state for the number of guests to include in the booking payload
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // 14. Prevent booking submission if the user is not authenticated
    if (!user) {
      toast.error("Please login first to book this destination.");
      return;
    }
    
    // 15. Validate guest input before initiating the API call
    if (guests < 1) {
      toast.error("Please enter a valid number of guests.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Processing your booking...");

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
      guests: Number(guests), // 16. Ensure guests is cast to a number before submission
    };

    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) throw new Error("Failed to create booking");

      const data = await res.json();
      console.log("Booking Response:", data);
      
      // 17. Update the loading toast to a success state upon successful booking
      toast.success("Booking confirmed successfully!", { id: toastId });
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Failed to process booking. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
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
            <span className="text-sm font-semibold text-slate-800">{country}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Duration</span>
            <span className="text-sm font-semibold text-slate-800">{duration}</span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-sm text-slate-500">Departure</span>
            <span className="text-sm font-semibold text-slate-800">{formattedDate}</span>
          </div>
          
          <div className="pt-2">
            <label className="text-sm font-medium text-slate-700 mb-2 block">Number of Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mt-4">
          <button
            onClick={handleBooking}
            disabled={isSubmitting}
            className="w-full rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-cyan-600 hover:shadow-lg sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Book Now"}
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
