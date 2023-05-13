export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};

//　取得したポケモンの名前をpokemon.jsonのjaの値に変換
export const getPokemonName = (name) => {
  const SearchWord = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const pokemonName = require("../pokemon.json");
  const pokemon = pokemonName.find((obj) => obj.en === SearchWord);
  return pokemon ? pokemon.ja : name;
};

// 取得したポケモンのタイプをpokemonType.jsonのjaの値に変換
export const getPokemonType = (type) => {
  const SearchWord = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const pokemonType = require("../pokemonType.json");
  const pokemon = pokemonType.find((obj) => obj.en === SearchWord);
  return pokemon ? pokemon.ja : type;
};
