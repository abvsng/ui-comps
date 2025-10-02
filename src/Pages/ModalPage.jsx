import React from "react";
import Modal from "../Components/Modal";

export default function ModalPage() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
      > Show Modal </button>
      {show && <Modal setShow={setShow} />}
    </>
  );
}
