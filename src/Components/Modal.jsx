/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "motion/react";
export default function Modal({ setShow }) {
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShow]);
  return (
    <>
      <div
        ref={modalRef}
        className=" fixed top-0 left-0 w-screen h-screen bg-black/30 z-10"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 1, ease: "linear" },
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" fixed top-1/2 left-1/2 rounded-2xl bg-indigo-600 w-3/5 h-2/3 transform -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
