import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Componenets/TodoList'
import Props from './Map/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <TodoList/> */}
      <Props/>
     </div>
    </>
  )
}

export default App
