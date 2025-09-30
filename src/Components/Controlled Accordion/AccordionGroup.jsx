import { useState } from "react";
import { faqs } from "./faq";
import Accordion from "./Accordion";
export default function AccordionGroup() {
  const [show, setShow] = useState(null);
  const changeShow = (index) => {
    if (show === index) {
      setShow(null);
      return;
    }
    setShow(index);
  };
  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          show={index === show ? true : false}
          changeShow={changeShow}
          index={index}
        >
          {faq.body}
        </Accordion>
      ))}
    </>
  );
}
