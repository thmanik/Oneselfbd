export type TStatus = "active" | "banned" | "deleted";
export type TRoles = "customer" | "staff" | "admin";
type TUserCommon = {
  fullName?: string;
};

type TCustomer = TUserCommon;
type TStaff = TUserCommon;
type TAdmin = TUserCommon;
type TAddress = {
  fullAddress: string;
  city: string;
  state: string;
  country: string;
};

export type TUserProfile = {
  _id?: string | null;
  role?: TRoles | null;
  phoneNumber?: string | null;
  email?: string | null;
  customer?: TCustomer | null;
  staff?: TStaff | null;
  admin?: TAdmin | null;
  address?: TAddress | null;
  status?: TStatus | null;
};
