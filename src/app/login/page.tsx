"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { TUser } from "@/redux/features/auth/interface";
import { useAppDispatch } from "@/redux/hooks";
import decodeJWT from "@/utilities/decodeJWT";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
// LoginPage.tsx
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Handle login logic here

    try {
      const res = await login(data).unwrap();

      const user = decodeJWT(res.data.accessToken) as TUser;
      // console.log(user)
      dispatch(setUser({ user: user, token: res.data.accessToken }));
    } catch (error) {
      // console.log(error);
    }
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
              name="phoneNumber"
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

export default LoginPage;
