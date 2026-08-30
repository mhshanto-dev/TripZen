"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteAlert({ booking }) {
  const router = useRouter();

  const { _id, destinationName } = booking;

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();

      console.log("Delete response:", data);

      if (data.deletedCount > 0) {
        toast.success("Booking deleted successfully!");

        router.refresh();
      } else {
        toast.error("Delete failed!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button className="rounded-none text-red-500" variant="outline">
        <TrashBin />
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>.
                <br />
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button slot="close" variant="danger" onClick={handleDelete}>
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
