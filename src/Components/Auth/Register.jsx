import React from "react";
import "../style.scss";
import avatar from "../../img/avatar.png";

const Register = () => {
  return (
    <div className="registerForm">
      <div className="formWrapper">
        <form>
          <h3>Регистрация</h3>
          <input type="text" placeholder="Придумайте логин" />
          <input type="email" placeholder="Укажите email" />
          <input type="password" placeholder="Придумайте пароль" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="" />
            <span>Добaвить фото</span>
          </label>
          <button>Зарегестрироваться</button>
        </form>
        <p>
          Уже зарегестрированны? <a href="/login">Войти</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
