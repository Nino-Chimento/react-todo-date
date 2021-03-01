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
    text-decoration: ${(props) => (props.complete ? "line-through" : "")};
    width:100%;
    margin:auto;
    border-radius:6px;
    margin-top:20px;
    display:flex;
    align-items:center;
    height:80px;
`;

export const StyledButtonTodo = Styled.div`
        width:20%;
        display:flex;
        margin:auto;
`;

export const StyledAllarm = Styled.div<any>`
    width:20%;
    margin:auto;
    border-radius:6px;
    background: ${(props) => props.date};
`;

export const StyledWrapPass = Styled.div`
    text-align:center;
`;

export const StyledWrapButtonLog = Styled.div`
    width:20%;
    margin:auto;
`;

export const StyledWrapInputLog = Styled.div`
    margin-bottom:20px;
`;

export const StyledLabelLog = Styled.label`
        margin-right:5px;
`;

export const StyledText = Styled.div`
    width:50%;
`;

export const StyledComplete = Styled.div`
    width:100px;
    margin-right:5px;
`;

export const StyleTextAllarm = Styled.i`
    margin-right:5px;
`;
