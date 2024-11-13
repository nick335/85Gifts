import React from "react";
import { GiNotebook } from "react-icons/gi";

export default function OrderHistory() {
  return (
    <>
      <div className="bg-amber-700 p-4 border border-green-500 h-screen">
        <div className="flex flex-row items-center gap-4 rounded-md bg-rose-300">
          <GiNotebook />
          <h1>Order History</h1>
        </div>
      </div>
    </>
  );
}
