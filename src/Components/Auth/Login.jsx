import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../style.scss";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="registerForm">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <h3>Авторизация</h3>

          <input type="email" placeholder="Укажите email" />
          <input type="password" placeholder="Введите пароль" />

          <button>Войти</button>
          {err && <span>Неправильный логин или пароль</span>}
        </form>
        <p>
          Нет профиля? <a href="/register">Зарегестрироваться</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
