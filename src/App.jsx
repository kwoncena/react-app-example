import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import StyledButton from './StyledButton'
import Welcome from './Welcome'
import Counter from './Counter'
import Form from './Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Welcome/>
        <Counter/>
        <Form/>
        
      </div>
      
    </>
  )
}

export default App;
