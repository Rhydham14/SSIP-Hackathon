import React from "react";

export default function Navitems(item) {
  return (
    <>
      <div className="text-black ease-in-out px-4 py-2 font-normal text-base transition-all duration-[.5s] hover:bg-blue-100 hover:text-neutral-800 hover:rounded-full">
        <p className="cursor-pointer">{item.title}</p>
      </div>
    </>
  );
}