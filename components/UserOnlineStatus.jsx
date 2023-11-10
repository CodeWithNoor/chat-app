"use client";
// Import necessary functions from Firebase
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { db } from "@/firebase"; 
import { ref, update, onValue } from "firebase/database";

//************************ OnlineStatusUpdater **************************//
const OnlineStatusUpdater = ({ userId }) => {
    useEffect(() => {
        const userRef = ref(db, `users/${userId}`);
        const handleAuthStateChanged = (user) => {
            if (user) {
                update(userRef, { online: true });
            } else {
                update(userRef, { online: false });
            }
        };

        const unsubscribe = onAuthStateChanged(handleAuthStateChanged);
        return () => {
            unsubscribe();
        };
    }, [userId]);

    return null; 
};

//************************ */ ListenStatusUpdater **************************//
const OnlineStatusListener = ({ userId }) => {
    const [isUserOnline, setIsUserOnline] = useState(false);

    useEffect(() => {
        const userRef = ref(db, `users/${userId}/online`);

        const handleOnlineStatusChange = (snapshot) => {
            const onlineStatus = snapshot.val();
            setIsUserOnline(onlineStatus);
        };

        const unsubscribe = onValue(userRef, handleOnlineStatusChange);

        return () => {
            unsubscribe();
        };
    }, [userId]);

    return <p>{isUserOnline ? "Online" : "Offline"}</p>;
};

export { OnlineStatusUpdater, OnlineStatusListener }

