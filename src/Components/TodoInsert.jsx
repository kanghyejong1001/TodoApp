import { useState } from "react"
import styled from "styled-components"

function TodoInsert({ onInsert }) {
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        onInsert(text)
        setText('')
        e.preventDefault()
    }

    return (  
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="할 일 입력"
                    value={text}
                    onChange={onChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid $dee2e6;
    width: 80%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    display: inline-block;
`

const Button = styled.button`
    width: 20%;
    height: 50px;
    background:#63e6be;
    display: inline-block;
`


export default TodoInsert
