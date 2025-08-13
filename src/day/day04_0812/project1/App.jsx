import '../../../App.css'
import ColorChange from './component/ColorChange'
import Counter from './component/Counter'
import InputMirror from './component/InputMirror'
import TodoList from './component/TodoList'
import Toggle from './component/Toggle'

function App() {

  return (
    <>
      <Counter />
      <hr />

      <InputMirror />
      <hr />

      <ColorChange />
      <hr />

      <Toggle />
      <hr />

      <TodoList />
      <hr />      
    </>


  )
}

export default App
