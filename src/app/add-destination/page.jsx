"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const AddDestinationPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const destination = Object.fromEntries(formData);

    console.log(destination);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(destination),
        },
      );

      const data = await res.json();
      console.log(data);

      // ✅ Successfully added
      if (res.ok) {
        alert("Destination added successfully!");

        // ✅ Go to All Destinations page
        router.push("/destinations");

        // ✅ Refresh the page/data
        router.refresh();
      } else {
        alert("Failed to add destination.");
      }
    } catch (error) {
      console.error("Error adding destination:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Add Destination
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
            Add a new travel destination and create an amazing experience for
            travelers.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <form onSubmit={onSubmit} className="space-y-7">
            {/* Destination Information */}
            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Destination Information
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Destination Name */}
                <div className="md:col-span-2">
                  <TextField name="destinationName" isRequired>
                    <Label>Destination Name</Label>

                    <Input
                      placeholder="Bali Paradise"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>
                </div>

                {/* Country */}
                <TextField name="country" isRequired>
                  <Label>Country</Label>

                  <Input placeholder="Indonesia" className="mt-2 rounded-xl" />

                  <FieldError />
                </TextField>

                {/* Category */}
                <Select
                  name="category"
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
                <TextField name="price" type="number" isRequired>
                  <Label>Price (USD)</Label>

                  <Input
                    type="number"
                    placeholder="1299"
                    className="mt-2 rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Duration */}
                <TextField name="duration" isRequired>
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
                  type="date"
                  isRequired
                  className="md:col-span-1"
                >
                  <Label>Departure Date</Label>

                  <Input type="date" className="mt-2 rounded-xl" />

                  <FieldError />
                </TextField>

                {/* Image URL */}
                <div className="md:col-span-1">
                  <TextField name="imageUrl" isRequired>
                    <Label>Image URL</Label>

                    <Input
                      type="url"
                      placeholder="https://example.com/bali-paradise.jpg"
                      className="mt-2 rounded-xl"
                    />

                    <FieldError />
                  </TextField>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <TextField name="description" isRequired>
                    <Label>Description</Label>

                    <TextArea
                      placeholder="Describe the travel experience..."
                      className="mt-2 min-h-32 rounded-xl"
                    />

                    <FieldError />
                  </TextField>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200" />

            {/* Submit Button */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="reset"
                variant="outline"
                className="w-full rounded-xl border-slate-300 text-slate-600 sm:w-auto"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 px-8 font-semibold text-white transition hover:bg-cyan-600 sm:w-auto"
              >
                Add Travel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddDestinationPage;
