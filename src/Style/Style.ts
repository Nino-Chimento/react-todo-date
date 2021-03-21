import Styled from "styled-components";

export const StyledWrap = Styled.div`
    background: linear-gradient(18deg, rgb(17, 200, 220), rgb(90, 67, 121));
    width:90%;
    margin:auto;
    text-align:center;
    padding-bottom:20px;
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
    opacity: ${(props) => (props.complete ? "0.6" : "")};
    width:80%;
    margin:auto;
    border-radius:6px;
    margin-top:20px;
    display:flex;
    align-items:center;
    height:80px;
    background: #f4f4f4;
    border-radius: 0.5rem;
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

export const StyledTitle = Styled.h1`
  color: #f4f4f4;
  font-weight: 800;
  margin: 1rem 0;
  `;

export const StyledButtonDeleteComplete = Styled.div`
    width:30%;
    margin-left:10px;
`;

export const StyledInput = Styled.input`
    background: #f4f4f4;
    border-radius: 0.5rem;
    &:focus {
        outline: none;
    }
`;
export const StyledNav = Styled.div`
    width:90%;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    height:90px;
`;
export const StyledLogo = Styled.div`
    width:150px;
`;

export const StyledTextJumbo = Styled.div`
    position:absolute;
    left:10%;
    bottom:10%;
    line-height:42px;
`;

export const StyledTitleJumbo = Styled.div`
     font-size:45px;
     color:white;
     text-transform:uppercase;
`;
export const StyleTextJumbo = Styled.div`
    font-size:28px;
    color:white;
    text-transform: uppercase;
    width:90%;
    line-height: 25px;
`;
export const StyledSpanJumbo = Styled.span`
    color: #E7C700;
    text-transform: uppercase;
`;
