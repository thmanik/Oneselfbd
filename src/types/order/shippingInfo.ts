export type TShippingInfo = {
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  email?: string;
  notes?: string;
};

export type TShippingInfoState = {
  fullName: string;
  phoneNumber: string;
  notes: string;
  email: undefined;
  fullAddress: string;
  data: null | TShippingInfo;
  errors: string[] | null;
};
