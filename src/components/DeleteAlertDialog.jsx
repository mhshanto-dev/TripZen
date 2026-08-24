"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlertDialog({ destination }) {
  const { destinationName, _id } = destination;

  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/destination/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        alert("Destination deleted successfully!");


        router.push("/destinations");

        router.refresh();
      } else {
        alert("Failed to delete destination.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      {/* Delete Button */}
      <Button
        className="rounded-xl border-rose-500 px-5 py-2.5 font-semibold text-rose-500 transition-all duration-300 hover:bg-rose-50"
        variant="outline"
      >
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-[calc(100%-2rem)] max-w-[400px] rounded-2xl">
            {/* Close */}
            <AlertDialog.CloseTrigger />

            {/* Header */}
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* Body */}
            <AlertDialog.Body>
              <p className="text-sm leading-6 text-slate-600">
                This will permanently delete{" "}
                <strong className="font-semibold text-slate-900">
                  {destinationName}
                </strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            {/* Footer */}
            <AlertDialog.Footer className="flex gap-3">
              <Button slot="close" variant="tertiary" className="rounded-xl">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
                className="rounded-xl font-semibold"
              >
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

export default DeleteAlertDialog;
