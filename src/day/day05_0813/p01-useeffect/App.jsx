import { useState } from 'react'
import '../../src/App.css'
import Example1 from './compo_effect/Example1'
import Example2 from './compo_effect/Example2'
import Example3 from './compo_effect/Example3'
import Example4 from './compo_effect/Example4'
import Example5 from './compo_effect/Example5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example1 />
      <hr />

      <Example2 />
      <hr />

      <Example3 />
      <hr />

      <Example4 />
      <hr />

      <Example5 />
      <hr />
    </>
  )
}

export default App
