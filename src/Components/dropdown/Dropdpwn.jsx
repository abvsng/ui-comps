import React from "react";
export default function DropDown() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Tab setShow={setShow} show={show} />
      {show && <Menu setShow={setShow} />}
    </>
  );
}
function Tab({ setShow, show }) {
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
        className=" px-4 py-2 bg-indigo-600 cursor-pointer w-fit rounded-2xl mt-2 ml-2"
      >
        Tab
      </div>
    </>
  );
}
function Menu({ setShow }) {
  const menuRef = React.useRef(null);
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) setShow(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setShow]);
  return (
    <>
      <div
        ref={menuRef}
        className=" w-40 h-60 bg-indigo-400 ml-2 mt-1 rounded-2xl"
      ></div>
    </>
  );
}
