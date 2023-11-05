import { useState } from "react"
import axios from 'axios';
const Card = ({ pokemon }) => {
  const [name, setName] = useState(pokemon.name)
  const handleTranslation = async () => {
    const apiKey = 'AIzaSyA63uX2cdhI8odLq1MWmTlhovD5xbPQVfU'; // 自分のAPIキーに置き換えてください

    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          q: pokemon.name,
          target: 'ja' // 翻訳先の言語コード（例: 'ja'は日本語）
        }
      );
      const translatedText = response.data.data.translations[0].translatedText;
     setName(translatedText)
    } catch (error) {
      console.error(error);
    }
  };
  handleTranslation();
    return  (
        <>
          <div className="mb-4 mt-4 mx-auto text-black bg-gray-100 font-bold border shadow-2xl">
            <div className="flex justify-center">
              <img src={pokemon.sprites.front_default} alt="" className="transtion duration-1000 transform hover:scale-150 w-60" />
            </div>
            <h3 className="cardName text-3xl">{ name }</h3>
            <div className="cardTypes">
              <div className="mb-4">タイプ</div>
              {pokemon.types.map((type, i) => {
                return (
                  <div className="mb-4" key={i}>
                    <span className="typeName text-gray-400">{type.type.name}</span>
                  </div>
                )
              })}
            </div>
            <div className="cardInfo">
              <div className="cardData">
                <p className="title text-yellow-600 mb-4">重さ：{pokemon.weight}</p>
              </div>
              <div className="cardData">
                <p className="title text-yellow-600 mb-4">高さ：{pokemon.height}</p>
              </div>
              <div className="cardData">
                <p className="title text-yellow-600 text-sm">アビリティ：{pokemon.abilities[0].ability.name}</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card