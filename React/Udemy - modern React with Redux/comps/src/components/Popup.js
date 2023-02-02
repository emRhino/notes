import { createPortal } from "react-dom";

const modalNode = document.getElementById("modal");

const Popup = ({ changeState }) => {
  const handleClosePopup = () => {
    changeState(false);
  };

  const popupWrapper = (
    <div class="wrapper">
      <div>
        <button onClick={handleClosePopup}>Close</button>
        <div>Coś tam coś tam</div>
      </div>
      <div
        onClick={handleClosePopup}
        style={{ height: "50px", backgroundColor: "red" }}
      ></div>
    </div>
  );

  return createPortal(popupWrapper, modalNode);
};

export default Popup;
