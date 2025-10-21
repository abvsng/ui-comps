import React from "react";
import Modal from "../Components/Modal";
import { AnimatePresence } from "framer-motion";

export default function ModalPage() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Modal
      </button>
      <AnimatePresence>
        {show && (
          <div>
            <Modal setShow={setShow} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
