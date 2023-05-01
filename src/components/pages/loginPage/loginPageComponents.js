import styled from "styled-components";
import { PasswordInput } from "@skbkontur/react-ui";
export const Body = styled.div`
  background-color: rgb(40, 151, 151);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
export const LoginBody = styled.div`
  width: 30%;
  border: 1px solid white;
  color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1280px) {
    width: 40%;
  }
  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70%;
    
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;
export const PInputUserLogin = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  margin-left: -45%;
`;
export const InputUserLogin = styled.input`
  width: 50%;
  font-size: 24px;
  font-weight: 600;
  padding-left: 16px;
`;
export const LabelUserLogin = styled.label`
  display: flex;
  align-items: center;
  justify-content:center;
  text-align: center;
  flex-direction: column;
`;

export const ButtonUserLogin = styled.button`
border: 1px solid white;
color: white;
text-align: center;
background-color: rgb(40, 151, 151);
margin: 24px;
height: 40px;
width: 70%;
cursor: pointer;
border-radius: 8px;
font-size: 24px;
margin-top: 4vh;
&&:hover {
  background-color: #888888;
  font-weight: 600;
}
&&:active {
  background-color: #d86800;
  font-weight: 600;
}
`;
export const ErrBlock=styled.div`
color:red;
width:36%;
margin-left: auto;
margin-right: auto;
font-size: 16px;

`
export const PInputUserRegister = styled.p`
color: white;
font-size: 16px;
font-weight: 600;
margin: 8px;
text-align: left;
`;
export const HInputUserRegister = styled.p`
color: white;
font-size: 36px;
font-weight: 600;
margin: 8px;
`;
export const Form =styled.form`
display: flex;
align-items: center;
justify-content:start;
text-align: center;
flex-direction: column;
width: 90%;

`
export const BlockPassword = styled.div`
margin-left:auto;
margin-right:auto;

`

export const Password=({name,value,cbFunc})=>{
  return (
   <BlockPassword>
         <PasswordInput
             name={name}
             value={value}
             onChange={cbFunc}
           />
   </BlockPassword>
  )
 }