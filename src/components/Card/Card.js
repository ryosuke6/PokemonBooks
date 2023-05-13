import React from "react";
import { getPokemonName, getPokemonType } from "../../utils/pokemon";
import "./Card.css";

const Card = ({ pokemon }) => {
  const PokemonNameJa = getPokemonName(pokemon.name);
  return (
    <div className="card">
      <div className="cardImg">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
          className="PokemonImg"
        ></img>
      </div>
      <h3 className="cardName">{PokemonNameJa}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          const PokemonTypeJa = getPokemonType(type.type.name);
          console.log(type.type.name);
          return (
            <div key={type.type.name}>
              <span className="typeName">{PokemonTypeJa}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ:{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ:{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">特性:{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
