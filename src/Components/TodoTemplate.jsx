import styled from "styled-components";

function TodoTemlate({ children }) {
    return (
        <TodoTemlateDiv>
            {children}
        </TodoTemlateDiv>
    );
}

const TodoTemlateDiv = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 16px;

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`

export default TodoTemlate;