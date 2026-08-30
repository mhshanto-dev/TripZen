"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ destination }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData(e.target);
    const updatedDestination = Object.fromEntries(formData);

    console.log("Updated Data:", updatedDestination);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDestination),
        },
      );

      const data = await res.json();

      console.log("Server Response:", data);

      if (res.ok) {
        alert("Destination updated successfully!");

        // Close modal
        setIsOpen(false);

        // Refresh current Next.js page
        router.refresh();
      } else {
        alert("Failed to update destination.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      {/* ================= EDIT BUTTON ================= */}
      <Button
        onPress={() => setIsOpen(true)}
        variant="bordered"
        className="flex w-full items-center justify-center gap-2 rounded-xl border-cyan-500 px-5 py-2.5 font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-50 sm:w-auto"
      >
        <BiEdit className="text-lg" />
        Edit
      </Button>

      {/* ================= MODAL ================= */}
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[calc(100%-1.5rem)] max-w-2xl overflow-hidden rounded-2xl sm:w-full">
            {/* Close */}
            <Modal.CloseTrigger />

            {/* ================= HEADER ================= */}
            <Modal.Header className="border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <Modal.Heading className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Edit Destination
                </Modal.Heading>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Update your destination information below.
                </p>
              </div>
            </Modal.Header>

            {/* ================= BODY ================= */}
            <Modal.Body className="max-h-[75vh] overflow-y-auto p-4 sm:p-6">
              <form
                onSubmit={onSubmit}
                id="edit-destination-form"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField
                      name="destinationName"
                      defaultValue={destinationName}
                      isRequired
                    >
                      <Label>Destination Name</Label>

                      <Input
                        placeholder="Bali Paradise"
                        className="mt-2 rounded-xl"
                      />

                      <FieldError />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField name="country" defaultValue={country} isRequired>
                    <Label>Country</Label>

                    <Input
                      placeholder="Indonesia"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>

                  {/* Category */}
                  <Select
                    name="category"
                    defaultValue={category}
                    isRequired
                    className="w-full"
                    placeholder="Select category"
                  >
                    <Label>Category</Label>

                    <Select.Trigger className="mt-2 rounded-xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Beach" textValue="Beach">
                          Beach
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Mountain" textValue="Mountain">
                          Mountain
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="City" textValue="City">
                          City
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Adventure" textValue="Adventure">
                          Adventure
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Cultural" textValue="Cultural">
                          Cultural
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Luxury" textValue="Luxury">
                          Luxury
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Price */}
                  <TextField
                    name="price"
                    defaultValue={price}
                    type="number"
                    isRequired
                  >
                    <Label>Price (USD)</Label>

                    <Input
                      type="number"
                      placeholder="1299"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>

                  {/* Duration */}
                  <TextField name="duration" defaultValue={duration} isRequired>
                    <Label>Duration</Label>

                    <Input
                      placeholder="7 Days / 6 Nights"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>

                  {/* Departure Date */}
                  <TextField
                    name="departureDate"
                    defaultValue={departureDate}
                    type="date"
                    isRequired
                  >
                    <Label>Departure Date</Label>

                    <Input type="date" className="mt-2 rounded-xl" />

                    <FieldError />
                  </TextField>

                  {/* Image URL */}
                  <TextField name="imageUrl" defaultValue={imageUrl} isRequired>
                    <Label>Image URL</Label>

                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={description}
                      isRequired
                    >
                      <Label>Description</Label>

                      <TextArea
                        placeholder="Describe the travel experience..."
                        className="mt-2 min-h-32 rounded-xl"
                      />

                      <FieldError />
                    </TextField>
                  </div>
                </div>
              </form>
            </Modal.Body>

            {/* ================= FOOTER ================= */}
            <Modal.Footer className="flex flex-col-reverse gap-3 border-t border-slate-200 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
              <Button
                slot="close"
                variant="secondary"
                className="w-full rounded-xl sm:w-auto"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-destination-form"
                isDisabled={isLoading}
                className="w-full rounded-xl bg-cyan-500 px-6 font-semibold text-white transition hover:bg-cyan-600 sm:w-auto"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default EditModal;
