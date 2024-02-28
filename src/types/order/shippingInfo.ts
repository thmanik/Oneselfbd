export type TShippingInfo = {
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  email?: string;
  notes?: string;
};

export type TShippingInfoState = {
  data: null | TShippingInfo;
  errors: string[] | null;
};
