"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Magnifier } from "@gravity-ui/icons";

const DestinationsSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. Initialize local state from URL parameters to keep the UI in sync with the current search query
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [budget, setBudget] = useState(searchParams.get("budget") || "");
  const [duration, setDuration] = useState(searchParams.get("duration") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    
    // 2. Construct new URLSearchParams to safely build the query string without manual concatenation
    const params = new URLSearchParams();
    
    if (search) params.set("search", search);
    if (budget) params.set("budget", budget);
    if (duration) params.set("duration", duration);
    
    // Reset to page 1 whenever a new search is initiated
    params.set("page", "1");

    // 3. Push the new query string to the router to trigger a server-side re-render of the destinations page
    router.push(`/destinations?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    setBudget("");
    setDuration("");
    // 4. Clear all filters and return to the default destinations view
    router.push("/destinations");
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="md:col-span-2 relative">
          <label className="text-sm font-medium text-slate-700 mb-1 block">Destination</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Magnifier />
            </span>
            {/* 5. Use an uncontrolled-like approach with value/onChange to allow typing before submission */}
            <input
              type="text"
              placeholder="Search by name or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Max Budget ($)</label>
          <input
            type="number"
            placeholder="e.g. 1500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Max Duration (Days)</label>
          <input
            type="number"
            placeholder="e.g. 7"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>
      </div>
      
      <div className="mt-4 flex gap-3 justify-end">
        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
        >
          Clear
        </button>
        <button
          type="submit"
          className="rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default DestinationsSearch;
