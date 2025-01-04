"use client";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ parems }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <h2 className="p-3 bg-green-500 rounded text-black ">{parems.id}</h2>
    </div>
  );
}
