import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllPokemon } from './components/pokemon'

function App() {
 const jsonURL =  'https://pokeapi.co/api/v2/pokemon'
 const [loadingStr, setStr] = useState('ロード中')

 useEffect(() => {
  const fetchPokemonData = async () => {
    // すべてのポケモンデータ
    let res = await getAllPokemon(jsonURL)
    console.log(res)
    setStr('ポケモン情報を取得しました')
  }
  fetchPokemonData()
 },[])


  return (
    <>
      <h1>{ loadingStr }</h1>
    </>
  )
}

export default App
