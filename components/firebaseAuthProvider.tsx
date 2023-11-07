"use client";

import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { auth } from "@/firebase";

async function syncFirebaseToken(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.log("user sign_in authentication error with firebase", error);
    }
  } else {
    console.log("no session or firebase token");
  }
}

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    syncFirebaseToken(session);
  }, [session]);

  return <>{children}</>;
};

export default FirebaseAuthProvider;
