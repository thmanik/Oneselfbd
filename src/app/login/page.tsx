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

interface LoginFormInputs {
  number: number;
  password: string;
}

const page: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
              Sign In
            </Typography>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  className="border border-gray-300 my-2 p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Enter PhoneNumber/Email"
                />
              )}
            />
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
              <a href="/forget-password" className="text-primary underline">
                Forgot Password?
              </a>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              type="submit"
              fullWidth
              placeholder={undefined}
              className="mt-4 BtnStyle"
            >
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default page;
