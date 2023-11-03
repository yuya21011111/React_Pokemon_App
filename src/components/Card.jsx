const Card = ({ pokemon }) => {
    return  (
        <>
          <div className="mb-4 mt-4 mx-auto text-black bg-gray-100 font-bold border  shadow-2xl">
            <div className="flex justify-center">
              <img src={pokemon.sprites.front_default} alt="" className="transtion duration-1000 transform hover:scale-150 w-60" />
            </div>
            <h3 className="cardName text-3xl">{pokemon.name}</h3>
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