import { useEffect, useState } from "react";

export default function VisitorBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let visitors = localStorage.getItem("visitorCount");

    if (!visitors) {
      visitors = 1;
    } else {
      visitors = Number(visitors) + 1;
    }

    localStorage.setItem("visitorCount", visitors);
    setCount(visitors);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-3 mt-12 rounded-xl  border border-white/10 px-5 py-3 shadow-lg">
        {/* Eye Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-300 ">
          👁️
        </div>

        {/* Text */}
        <p className="text-sm ">
          You are the{" "}
          <span className="font-semibold ">{count.toLocaleString()}</span>
          <sup className="text-xs">th</sup> visitor
        </p>
      </div>
    </div>
  );
}
