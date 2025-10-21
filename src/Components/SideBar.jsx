/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "motion/react";
export default function SideBar({ isOpen, setIsOpen }) {
  const boxRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className=" fixed w-full h-full">
            <motion.div
              ref={boxRef}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.1, ease: "linear" },
              }}
              exit={{
                opacity: 0,
                x: 100,
                transition: { duration: 0.1, ease: "linear" },
              }}
              className=" w-2/7 h-screen fixed top-0 right-0 bg-indigo-600"
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
