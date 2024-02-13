import { TUser } from "@/redux/features/auth/interface";

export type TRootState = {
  auth: {
    user: TUser;
  };
};
