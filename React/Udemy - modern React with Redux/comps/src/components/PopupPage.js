import { useState } from "react";
import Popup from "./Popup";

const PopupPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={handleClick}>Fire popup!</button>
      {isVisible && <Popup changeState={setIsVisible} />}
    </>
  );
};

export default PopupPage;
