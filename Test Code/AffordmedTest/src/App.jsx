import { useState } from 'react';
import {Background, Foreground} from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-full h-full bg-zinc-800'>
    <Background />
    <Foreground />
</div>
  )
}

export default App
