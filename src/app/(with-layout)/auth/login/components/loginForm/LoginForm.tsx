/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { TUser } from "@/redux/features/auth/interface";
import { useAppDispatch } from "@/redux/hooks";
import decodeJWT from "@/utilities/decodeJWT";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = decodeJWT(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast({
        className: "bg-success text-white text-2xl",
        title: res.message,
      });
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error?.data?.message,
      });
    }
  };

  return (
    <div className="max-w-lg w-full px-4 sm:px-8 mx-auto mb-6 mt-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-6 sm:px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <h4 className="text-center my-3 font-bold text-2xl">Login Page</h4>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneEmailOrUid"
          >
            Phone Number
          </label>
          <Input
            className={`shadow appearance-none border ${errors.phoneEmailOrUid ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="tel"
            placeholder="Enter Your Phone Number"
            id="phoneEmailOrUid"
            {...register("phoneEmailOrUid")}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            className={`shadow appearance-none border ${errors.password ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="password"
            id="password"
            placeholder="Enter a Password"
            {...register("password")}
          />
        </div>
        <div className="flex items-center justify-between">
          <EcButton type="submit" className="w-full font-bold py-2 px-4">
            Login
          </EcButton>
        </div>
      </form>
      <div className="text-center">
        <span>Do not have any account?</span>{" "}
        <Link
          href="/auth/registration"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

// "use client";
// import EcButton from "@/components/EcButton/EcButton";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import { setUser } from "@/redux/features/auth/authSlice";
// import { TUser } from "@/redux/features/auth/interface";
// import { useAppDispatch } from "@/redux/hooks";
// import decodeJWT from "@/utilities/decodeJWT";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const [login] = useLoginMutation();
//   const router = useRouter();
//   const { toast } = useToast();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     try {
//       const res = await login(data).unwrap();
//       const user = decodeJWT(res.data.accessToken) as TUser;
//       dispatch(setUser({ user: user, token: res.data.accessToken }));
//       toast({
//         className: "bg-success text-white text-2xl",
//         title: res.message,
//       });
//       router.push("/");
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       // console.log(error)
//       toast({
//         variant: "destructive",
//         title: error?.data?.message,
//       });
//     }
//   };

//   return (
//     <div className="w-[430px] border-none md:mx-auto mb-6 mt-10">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       >
//         <div>
//           <h4 className="text-center my-3 font-bold  text-2xl">Login Page</h4>
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="phoneEmailOrUid"
//           >
//             Phone Number
//           </label>
//           <Input
//             className={`shadow appearance-none border ${errors.phoneEmailOrUid ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             type="tel"
//             placeholder="Enter Your Phone Number"
//             id="phoneEmailOrUid"
//             {...register("phoneEmailOrUid")}
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <Input
//             className={`shadow appearance-none border ${errors.password ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
//             type="password"
//             id="password"
//             placeholder="Enter a Password"
//             {...register("password")}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <EcButton type="submit" className=" w-full  font-bold py-2 px-4 ">
//             Login
//           </EcButton>
//         </div>
//       </form>
//       <div className="text-center">
//         <span>Do not have any account?</span>{" "}
//         <Link
//           href="/auth/registration"
//           className="text-blue-500 hover:text-blue-600 underline"
//         >
//           Create Account
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
