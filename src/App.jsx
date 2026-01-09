import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const reqApi = async () => {
    console.log("Buscando personajes...")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src="img/rickmorty.png" alt='Rick & Morty' className='img-home'/>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
      </header>
    </div>
  )
}

export default App
