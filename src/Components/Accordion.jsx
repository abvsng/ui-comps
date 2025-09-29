import React, { useState } from "react";
export default function Accordion({ children, title }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="md:w-3/5 w-3/4 mx-auto border-2 rounded-2xl border-cyan-700 ">
        <div
          className="flex flex-row justify-between cursor-pointer items-center"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="p-2 font-bold text-xl px-4 ">{title}</div>
          <div className=" px-4">{show ? "-" : "+"}</div>
        </div>
        {show && (
          <div className=" p-4 text-justify border-t-2 border-cyan-700">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
