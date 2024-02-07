"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// LoginPage.tsx
import { Input } from "@material-tailwind/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
interface LoginFormInputs {
  number: number;
  password: string;
}

const page = () => {
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
                <Input
                  crossOrigin={undefined}
                  type="tel"
                  {...field}
                  size="lg"
                  label="Phone Number/Email"
                  placeholder="Enter Your Phone Number/Email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  crossOrigin={undefined}
                  type="password"
                  {...field}
                  size="lg"
                  label="Password"
                  placeholder="Enter Your Password"
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
