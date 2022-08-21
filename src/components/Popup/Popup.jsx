import { React, useState } from "react";
import "./Popup.css";

function Popup({ close }) {
  const [popup] = useState(false);

  const inactive = "popup";
  const active = "popup_opened";

  return (
    <div className={popup ? active : inactive} onClick={() => close(false)}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
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
          <div className="popup__input_wrap">
            <input
              placeholder="Enter your geo"
              type="text"
              className="popup__input_wrapper popup__input_geo"
              name="geo"
            />
            <input
              placeholder="Enter your date of birth"
              type="text"
              className="popup__input_wrapper popup__input_date"
              name="date"
            />
          </div>
          <input
            type="submit"
            className="popup__button-save"
            value="Save"
            name="submit"
          />
        </form>
        <button
          type="button"
          className="popup__button-close"
          onClick={() => close(false)}
        />
      </div>
    </div>
  );
}

export default Popup;
