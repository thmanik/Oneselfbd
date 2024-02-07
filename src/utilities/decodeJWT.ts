"use client";
import { jwtDecode } from "jwt-decode";

const decodeJWT = (token: string) => {
  return jwtDecode(token);
};

export default decodeJWT;
