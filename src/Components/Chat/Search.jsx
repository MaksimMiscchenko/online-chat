import React from "react";
import "../style.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Найти пользователя" />
      </div>
      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zKezNprQdJJtZYak4YT6fxSX2x2gz5MAkw&usqp=CAU"
          alt=""
        />
        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
