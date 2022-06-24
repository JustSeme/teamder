import { React, useState } from "react";
import "./Popup.css";

function Popup({close}) {
  const [popup, setPopup] = useState(false);

  const inactive = "popup";
  const active = "popup_opened";

  return (
    <div className={popup ? active : inactive} onClick={() => close(false)}>
      <div className="popup__container" onClick={e => e.stopPropagation()}>
        <h2 className="popup__title">Edit profile</h2>
        <form className="popup__form" name="edit-Profile">
          <input
            placeholder="Enter your name"
            type="text"
            className="popup__input popup__input_name_name"
            name="name"
          />
          <input
            placeholder="Enter your description"
            type="text"
            className="popup__input popup__input_name_profession"
            name="profession"
          />
          <input
            type="submit"
            className="popup__button-save"
            value="Save"
            name="submit"
          />
        </form>
        <button type="button" className="popup__button-close" onClick={() => close(false)}/>
      </div>
    </div>
  );
}

export default Popup;