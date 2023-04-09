import { useRef, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import TodoInsert from "./Components/TodoInsert"
import TodoList from "./Components/TodoList"
import TodoHeader from "./Components/TodoHeader"
import TodoTemlate from "./Components/TodoTemplate"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '숨쉬기',
      checked: true
    },
    {
      id: 2,
      text: '먹기',
      checked: true
    },
    {
      id: 3,
      text: '잠자기',
      checked: true
    },
    {
      id: 4,
      text: '걷기',
      checked: true
    },
    {
      id: 5,
      text: '뛰기',
      checked: false
    },
  ])

  const nextId = useRef(5)

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: nextId.current + 1,
          text,
          checked: false
        }
      ])
    )
    nextId.current++
  }

  const onToggle = () => {
    
  }

  const onDelete = () => {
    
  }

  return (
    <div>
      app
      <GlobalStyle />
      <TodoTemlate>
        <TodoHeader /><br/>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={ todos }/>
      </TodoTemlate>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #E9ECEF;
  }
`

export default App
