import { useState } from "react";
import Accordion from "./Accordion";
export default function AccordionGroup() {
  const [faqs, setFaqs] = useState([
    {
      open: false,
      title: "What is a controlled component?",
      body: "A controlled component is a component that allows you to control its state by passing in an external value. In this case, the external value is the `isOpen` prop, which is used to control the state of the accordion.",
    },
    {
      open: false,
      title: "How do I use the controlled component?",
      body: "To use the controlled component, you need to pass in the `isOpen` prop and handle its state change. Here's an example:",
    },
    {
      open: false,
      title:
        "What is the difference between controlled and uncontrolled components?",
      body: "A controlled component is a component that allows you to control its state by passing in an external value. An uncontrolled component, on the other hand, does not have a state and relies on its default behavior to determine its state. In this case, the uncontrolled component is the accordion, which does not have a state and relies on its default behavior to determine its state.",
    },
    {
      open: false,
      title: "How do I handle state change in a controlled component?",
      body: "To handle state change in a controlled component, you need to pass in an external value and update it when the state changes. Here's an example:",
    },
    {
      open: false,
      title: "What is the use of the `useState` hook in React?",
      body: "The `useState` hook is used to manage state in React. It allows you to add state to functional components and class components. Here's an example:",
    },
  ]);
  const changeOpen = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // toggle clicked one, close others
      }))
    );
  };
  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          show={faq.open}
          index={index}
          changeOpen={changeOpen}
        >
          {faq.body}
        </Accordion>
      ))}
    </>
  );
}
