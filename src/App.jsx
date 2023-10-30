import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllPokemon } from './components/pokemon'

function App() {
 const jsonURL =  'https://pokeapi.co/api/v2/pokemon'

 useEffect(() => {
  const fetchPokemonData = async () => {
    // すべてのポケモンデータ
    let res = await getAllPokemon(jsonURL);
    console.log(res)
  }
  fetchPokemonData()
 },[])


  return (
    <>
    <h1 className='text-red-500 text-7xl text-center'>Hello,World</h1>
    </>
  )
}

export default App
