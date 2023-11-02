const Card = ({ pokemon }) => {
    return  (
        <>
          <div className="card">
            <div className="cardImg flex mx-auto justify-center">
              <img src={pokemon.sprites.front_default} alt="" className="transtion duration-1000 transform hover:scale-150 w-60" />
            </div>
            <h3 className="cardName text-3xl flex mx-auto justify-center">{pokemon.name}</h3>
            <div className="cardTypes flex mx-auto justify-center">
              <div>タイプ</div>
              {pokemon.types.map((type, i) => {
                return (
                  <div key={i}>
                    <span className="typeName text-gray-400">{type.type.name}</span>
                  </div>
                )
              })}
            </div>
            <div className="cardInfo flex mx-auto justify-center">
              <div className="cardData">
                <p className="title text-yellow-600">重さ：{pokemon.weight}</p>
              </div>
              <div className="cardData">
                <p className="title text-yellow-600">高さ：{pokemon.height}</p>
              </div>
              <div className="cardData">
                <p className="title text-yellow-600">アビリティ：{pokemon.abilities[0].ability.name}</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card