"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// LoginPage.tsx
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "./RegistrationPage.css";
interface LoginFormInputs {
  number: number;
  password: string;
}

const RegistrationPage: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Handle login logic here
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      className="justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center h-screen">
        <Card className="w-96" placeholder={undefined}>
          <CardBody className="flex flex-col gap-4" placeholder={undefined}>
            <Typography variant="h3" color="black" placeholder={undefined}>
              Sign up
            </Typography>
            {/* New Fields */}
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="border border-gray-300 my-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Your Full Name"
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  className="border border-gray-300 my-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Your Phone Number"
                />
              )}
            />
            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  className="border border-gray-300 my-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Email"
                />
              )}
            />
            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  className="border border-gray-300 my-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Enter Password"
                />
              )}
            />

            <div className="mt-2">
              <a href="/forgot-password" className="text-blue-500 underline">
                Do You Have Already An Account?
              </a>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              type="submit"
              fullWidth
              placeholder={undefined}
              className="mt-4 registerBtn"
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default RegistrationPage;
