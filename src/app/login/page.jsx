"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    console.log("Login User:", user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log("Login response:", { data, error });

    // Error
    if (error) {
      alert(error.message);
      return;
    }

    // Success
    if (data) {
      alert("Login successful!");

      router.push("/");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center">
        <Card className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-7 md:p-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Login to your account to continue
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="mb-1 text-sm font-medium text-gray-700">
                Email
              </Label>

              <Input className="w-full" placeholder="john@example.com" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
            >
              <Label className="mb-1 text-sm font-medium text-gray-700">
                Password
              </Label>

              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="w-full pr-10"
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-gray-500 transition-colors hover:text-gray-800"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeSlash className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>

              <FieldError />
            </TextField>

            {/* Login Button */}
            <Button type="submit" className="w-full">
              <Check />
              Login
            </Button>

            {/* Reset */}
            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </Form>
        </Card>
      </div>
    </main>
  );
};

export default LoginPage;
