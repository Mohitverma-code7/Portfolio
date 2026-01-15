import { useEffect, useState } from "react";
import { ref, runTransaction, onValue } from "firebase/database";
import { db } from "../Firebase";

export default function VisitorBox() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitRef = ref(db, "totalVisits");

    // Increment visitor count once per user session
    if (!sessionStorage.getItem("visited")) {
      // Only increment in production or once per session
      if (process.env.NODE_ENV === "production" || !process.env.NODE_ENV) {
        runTransaction(visitRef, (current) => (current || 0) + 1);
      }
      sessionStorage.setItem("visited", "true");
    }

    // Listen for real-time changes to update counter
    const unsubscribe = onValue(visitRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-3 mt-12 rounded-xl border border-white/10 px-5 py-3 shadow-lg">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-300">
          👁️
        </div>
        <p className="text-sm">
          You are the{" "}
          <span className="font-semibold">{count.toLocaleString()}</span>
          <sup className="text-xs">th</sup> visitor
        </p>
      </div>
    </div>
  );
}
