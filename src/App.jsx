import { useState } from 'react'
import Portfolio from './pages/Portafolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Portfolio />
      </div>
    </>
  )
}

export default App
