"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 6. Handle cases where there's only one page or no data, returning null to keep UI clean
  if (totalPages <= 1) return null;

  const handlePageChange = (newPage) => {
    // 7. Clone existing search parameters to retain current filters when navigating pages
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    
    // 8. Update the URL which triggers Next.js to re-fetch data for the new page
    router.push(`/destinations?${params.toString()}`);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition"
      >
        Previous
      </button>
      
      <span className="text-sm font-medium text-slate-600 px-4">
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
