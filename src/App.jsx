import { useState } from 'react'
import './App.css'
import Character from './components/Character'

function App() {

  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await api.json()
    setCharacters(characters.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src="img/rickmorty.png" alt='Rick & Morty' className='img-home'/>
            <button onClick={reqApi} className='btn-search'>Lista de Personajes</button>
          </>
        )}
      </header>
    </div>
  )
}

export default App
