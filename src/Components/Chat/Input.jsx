import React from "react";
import File from "../../img/file.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Введите сообщение" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={File} alt="" />
        </label>
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default Input;
