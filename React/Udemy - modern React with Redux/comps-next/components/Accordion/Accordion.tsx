import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";

const faq = [
  {
    id: 1,
    ask: "How can I do data fetching with Hooks?",
    answer:
      "Here is a small demo to get you started. To learn more, check out this article about data fetching with Hooks.",
  },
  {
    id: 2,
    ask: "Is there something like instance variables?",
    answer:
      "Yes! The useRef() Hook isn’t just for DOM refs. The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.",
  },
  {
    id: 3,
    ask: "Should I use one or many state variables?",
    answer:
      "If you’re coming from classes, you might be tempted to always call useState() once and put all state into a single object. You can do it if you’d like. Here is an example of a component that follows the mouse movement..",
  },
];

const Accordion = () => {
  const [activeQuestion, setActiveQuestion] = useState(-1);

  const handleClick = (i: number) => {
    setActiveQuestion((currentActiveQuestion: number): number => {
      if (currentActiveQuestion === i) {
        return -1;
      } else {
        return i;
      }
    });
  };

  const renderFaq = faq.map((topic, index) => {
    const arrow = () =>
      activeQuestion === index ? (
        <GoChevronDown className="pr-2" />
      ) : (
        <GoChevronRight className="pr-2" />
      );
    return (
      <div key={topic.id} className="p-2 border-solid border-2 border-black">
        <h2
          onClick={() => handleClick(index)}
          className="cursor-pointer font-bold py-2 flex items-center"
        >
          {arrow()}
          {topic.ask}
        </h2>
        {activeQuestion === index ? <p>{topic.answer}</p> : null}
      </div>
    );
  });

  return <div>{renderFaq}</div>;
};

export default Accordion;
