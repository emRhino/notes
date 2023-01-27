import { useState, useEffect, useRef } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChoosen, setIsChoosen] = useState({
    name: "Select",
    color: "black",
  });

  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const handleClickOption = (option) => {
    setIsChoosen(option);
    setIsOpen(false);
  };

  const handleClickDropdown = () => {
    setIsOpen((current) => !current);
    // setIsOpen((current) => {
    //   if (current === true) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
  };

  const renderOptions = data.map((option) => (
    <li
      className="p-2 cursor-pointer"
      key={option.name}
      onClick={() => handleClickOption(option)}
      style={{ color: option.color }}
    >
      {option.name}
    </li>
  ));

  return (
    <div ref={divEl}>
      <div
        className="flex cursor-pointer justify-between items-center p-2 border-solid border-2 border-black"
        onClick={handleClickDropdown}
      >
        <span style={{ color: isChoosen.color }}>{isChoosen.name}</span>
        {isOpen ? <GoChevronDown /> : <GoChevronUp />}
      </div>
      <div className=" border-solid border-2 border-black">
        <ul>
          {/*isOpen ? renderOptions : null */}
          {isOpen && renderOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
