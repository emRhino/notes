import { createPortal } from "react-dom";

const modalNode = document.getElementById("modal");

const Popup = ({ changeState }) => {
  const handleClosePopup = () => {
    changeState(false);
  };

  const popupWrapper = (
    <div onClick={handleClosePopup} class="wrapper">
      <button onClick={handleClosePopup}>Close</button>
    </div>
  );

  return createPortal(popupWrapper, modalNode);
};

export default Popup;
