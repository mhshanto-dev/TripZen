"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    console.log("User:", user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image || undefined,
    });

    console.log("Signup response:", { data, error });

    // Error
    if (error) {
      alert(error.message);
      return;
    }

    // Success
    if (data) {
      alert("Account created successfully!");

      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleSignUp = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center">
        <Card className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-7 md:p-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Create an Account
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Sign up to start your journey with us
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            {/* Name */}
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className="mb-1 text-sm font-medium text-gray-700">
                Name
              </Label>

              <Input className="w-full" placeholder="Type your name" />

              <FieldError />
            </TextField>

            {/* Image */}
            <TextField name="image" type="url" className="w-full">
              <Label className="mb-1 text-sm font-medium text-gray-700">
                Image URL
              </Label>

              <Input
                className="w-full"
                placeholder="https://example.com/image.jpg"
              />

              <FieldError />
            </TextField>

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
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
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

              <Description className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">
              <Button type="submit" className="w-full sm:flex-1">
                <Check />
                Create Account
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="w-full sm:flex-1"
              >
                Reset
              </Button>
            </div>
          </Form>
          {/* signup with goole  */}
          <div>
            <Button
              variant="outline"
              className="w-full sm:flex-1"
              onPress={handleGoogleSignUp}
            >
             <FaGoogle/>  Sign up with Google
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default SignUpPage;
