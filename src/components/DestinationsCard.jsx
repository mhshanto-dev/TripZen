import { Button } from "@heroui/react";
import Link from "next/link";

const DestinationsCard = ({ destination }) => {
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    departureDate,
    country,
    category,
    duration,
  } = destination;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* ================= IMAGE ================= */}
      <div className="relative h-48 w-full overflow-hidden sm:h-52 lg:h-56">
        <img
          src={imageUrl}
          alt={destinationName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-[11px] font-semibold text-white shadow-md sm:left-4 sm:top-4 sm:text-xs">
          {category}
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-3">
          {/* Destination Info */}
          <div className="min-w-0 flex-1">
            <h2 className="line-clamp-2 text-lg font-bold leading-tight text-slate-800 sm:text-xl">
              {destinationName}
            </h2>

            <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
              📍 {country}
            </p>
          </div>

          {/* Price */}
          <div className="shrink-0 text-right">
            <p className="text-lg font-bold text-cyan-600 sm:text-xl">
              ${price}
            </p>

            <p className="text-[10px] text-slate-400 sm:text-xs">per person</p>
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 sm:mt-5 sm:gap-4">
          {/* Duration */}
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 sm:text-xs">Duration</p>

            <p className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">
              {duration}
            </p>
          </div>

          {/* Departure */}
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 sm:text-xs">Departure</p>

            <p className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">
              {departureDate}
            </p>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* View Details */}
          <Link href={`/destinations/${_id}`}>
            <Button
              variant="bordered"
              className="w-full rounded-xl border-2 border-cyan-500 bg-white px-4 py-2.5 text-sm font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-50 sm:py-3 sm:text-base"
            >
              View Details
            </Button>
          </Link>

          {/* Book Now */}
          <Button className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-cyan-600 hover:shadow-md sm:py-3 sm:text-base">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
