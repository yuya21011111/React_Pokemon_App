import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllPokemon,getPokemon } from './components/pokemon'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
 const jsonURL =  'https://pokeapi.co/api/v2/pokemon'
 const [loading, setLoading] = useState('ロード中...')
 const [pokemonsData, setPokemonsData] = useState([])
 const [nextURL, setNextURL] = useState('')
 const [prevURL, setPrevURL] = useState('')

 useEffect(() => {
  const fetchPokemonData = async () => {
    // すべてのポケモンデータ
    let res = await getAllPokemon(jsonURL);
    // 詳細データの所得
   allPokemon(res.results)
   setNextURL(res.next)
   setPrevURL(res.previous)
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
// console.log(pokemonsData)

const handlePrevPage = async () => {
  if(!prevURL) return;
  let data = await getAllPokemon(prevURL)
  await allPokemon(data.results)
  setNextURL(data.next)
  setPrevURL(data.previous)
}

const handleNextPage = async () => {
  let data = await getAllPokemon(nextURL)
  await allPokemon(data.results)
  setNextURL(data.next)
  setPrevURL(data.previous)
}

  return (
    <>
    <Navbar />
      <h1 className='text-center text-yellow-400 text-sm'>{ loading }</h1>
      <div className='grid grid-cols-3 text-center bg-green-200'>
       {pokemonsData.map((pokemon, i) => {
        return <Card key={i} pokemon={pokemon} />
       })}
      </div>
      <div className="mb-2 bg-green-100">
        <div className='flex justify-center'>
        <button className='mr-4 rounded-full bg-red-500 text-lg text-white' onClick={handlePrevPage}>前へ</button>
        <button className='mr-4 rounded-full bg-blue-500 text-lg text-white' onClick={handleNextPage}>次へ</button>
        </div>
      </div>
    </>
  )
}

export default App
