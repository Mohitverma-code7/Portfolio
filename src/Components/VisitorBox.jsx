import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { onValue, ref, runTransaction } from "firebase/database";
import { db } from "../Firebase";

export default function VisitorBox() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitRef = ref(db, "totalVisits");

    if (!sessionStorage.getItem("visited")) {
      if (import.meta.env.PROD) {
        runTransaction(visitRef, (current) => (current || 0) + 1);
      }
      sessionStorage.setItem("visited", "true");
    }

    const unsubscribe = onValue(visitRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="ui-surface ui-surface-soft mt-12 flex items-center gap-3 px-5 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff2d55]/15 text-[#ff2d55]">
          <Eye size={16} />
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
