import React from "react";
import "./Search.css";
//　PokeApiを使ってポケモンを検索する機能を実装する
//　検索ボックスに入力した文字列を使って、ポケモンを検索する
//　検索結果を表示する
//　検索結果をクリックすると、ポケモンの詳細情報を表示する

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="ポケモンを検索"></input>
      <button>検索</button>
    </div>
  );
};

export default Search;
