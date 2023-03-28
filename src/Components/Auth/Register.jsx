import React from "react";
import "../style.scss";
import avatar from "../../img/avatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="registerForm">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <h3>Регистрация</h3>
          <input type="text" placeholder="Придумайте логин" />
          <input type="email" placeholder="Укажите email" />
          <input type="password" placeholder="Придумайте пароль" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="" />
            <span>Добaвить фото</span>
          </label>
          <button disabled={loading}>Зарегестрироваться</button>
          {loading && "Подождите"}
          {err && <span>Произошла ошибка</span>}
        </form>
        <p>
          Уже зарегестрированны? <a href="/login">Войти</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
