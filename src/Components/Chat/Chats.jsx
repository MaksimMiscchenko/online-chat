import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Burger from "../../img/burg.svg";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [showChats, setShowChats] = useState(true);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    setShowChats(true);
  };

  const toggleChats = () => {
    setShowChats(!showChats);
  };
  return (
    <div className="chats">
      <div className="burger-btn" onClick={toggleChats}>
        <img src={Burger} alt="" />
      </div>
      <div className={`${showChats ? "open" : "list"}`}>
        {Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName} </span>
                <p>{chat[1].lastMessage?.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Chats;
