import SideBar from "../Components/SideBar";
import React from "react";
export default function SideBarPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        SideBar
      </button>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
