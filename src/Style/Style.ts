import Styled from "styled-components";

export const StyledWrap = Styled.div`
    width:90%;
    margin:auto;
    text-align:center;
`;

export const StyledDeleteComplete = Styled.div`
        width:20%;
        margin:auto;
        margin:10px 0;
`;

export const StyledForm = Styled.form`
    width:80%;
    margin:auto;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`;

export const StyledWrapInput = Styled.div`
    display:flex;
    flex-direction:column;
`;

export const StyledButtonAdd = Styled.div`
    width:10%;
    height:30px;
    padding-top:20px;
`;

export const StyledTodo = Styled.div<any>`
 background: ${(props) => (props.expired ? "red" : "")};
    width:50%;
    margin:auto;
    border-radius:6px;
    margin-top:20px;
`;

export const StyledButtonTodo = Styled.div`
        width:20%;
        
        margin:auto;
`;

export const StyledAllarm = Styled.div`
    width:20%;
        margin:auto;
        border-radius:6px;
`;
