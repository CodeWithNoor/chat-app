"use client"
import React from "react";
import { SessionProvider as Provider } from "next-auth/react";
// import { firebaseApp } from "./Firebase";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  // firebaseApp;
  return <Provider>{children}</Provider>;
};
