"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AlertDialog, Button } from "@heroui/react";
import { PencilToSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const EditBookingModal = ({ booking }) => {
  const router = useRouter();
  
  // 18. Initialize edit state with current booking values to prepopulate the form
  const [guests, setGuests] = useState(booking.guests || 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = async () => {
    // 19. Validate the edited guests count before dispatching the update request
    if (guests < 1) {
      toast.error("Please enter a valid number of guests.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Updating booking...");

    try {
      const { data: tokenData } = await authClient.token();
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${booking._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify({ guests: Number(guests) }),
      });

      if (!res.ok) throw new Error("Failed to update booking");

      toast.success("Booking updated successfully!", { id: toastId });
      
      // 20. Refresh the route data to reflect the newly updated booking information
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update booking.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button 
        className="rounded-none text-slate-600" 
        variant="outline"
        onClick={() => setIsOpen(true)}
      >
        <PencilToSquare />
        Edit
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Edit Booking</h3>
            
            <div className="mb-6">
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Number of Guests
              </label>
              {/* 21. Provide a controlled input to accurately track user changes to the guest count */}
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              {/* 22. Disable submission button during network request to prevent duplicate updates */}
              <button
                type="button"
                onClick={handleUpdate}
                disabled={isSubmitting}
                className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 disabled:opacity-70"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBookingModal;
