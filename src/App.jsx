import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllPokemon,getPokemon } from './components/pokemon'
import Card from './components/Card'

function App() {
 const jsonURL =  'https://pokeapi.co/api/v2/pokemon'
 const [loading, setLoading] = useState('ロード中...')
 const [pokemonsData, setPokemonsData] = useState([])

 useEffect(() => {
  const fetchPokemonData = async () => {
    // すべてのポケモンデータ
    let res = await getAllPokemon(jsonURL);
    // 詳細データの所得
   allPokemon(res.results)
    setLoading('ポケモンデータ取得完了')
  }
  setTimeout(() => {
    fetchPokemonData()
  }, 2000);
 },[])

 const allPokemon = async (data) => {
  let pokemonData = await Promise.all(
    data.map((pokemon) => {
     let pokemonArray = getPokemon(pokemon.url)
     return pokemonArray
    })
  )
  setPokemonsData(pokemonData)
 }
console.log(pokemonsData)

  return (
    <>
      <h1 className='text-center text-yellow-400 text-4xl'>{ loading }</h1>
      <div className='grid grid-cols-3 text-center bg-green-100 mt-4'>
       {pokemonsData.map((pokemon, i) => {
        return <Card key={i} pokemon={pokemon} />
       })}
      </div>
    </>
  )
}

export default App
