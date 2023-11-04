import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button onClick={()=>{setCount(prev=>prev+1)}}>Add</button>
    </>
  )
}

export default App
