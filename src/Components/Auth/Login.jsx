import React from "react";
import "../style.scss";

const Login = () => {
  return (
    <div className="registerForm">
      <div className="formWrapper">
        <form>
          <h3>Авторизация</h3>

          <input type="email" placeholder="Укажите email" />
          <input type="password" placeholder="Введите пароль" />

          <button>Войти</button>
        </form>
        <p>
          Нет профиля? <a href="/register">Зарегестрироваться</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
