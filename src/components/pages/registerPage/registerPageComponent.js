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
export const RegisterBody = styled.div`
  width: 40%;
  border: 1px solid white;
  color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
 export const PInputUserRegister = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  text-align: left;
`;
export const HInputUserRegister = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 8px;
`;
export const InputUserRegister = styled.input`
  width: 90%;
  font-size: 24px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  // border-radius: 8px;
  padding-left: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const LabelUserRegister = styled.label`
  width:80%
  display: flex;
  align-items: left;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
export const ButtonUserRegister = styled.input`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin: 24px;
  height: 40px;
  width: 80%;
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
export const BlockPassword = styled.div`
width:100%;

`
const StyledPasswordInput = styled(PasswordInput)`
  width: 120%;
`;
export const Password = ({ name, value, cbFunc }) => {
  return (
    <BlockPassword>
      <StyledPasswordInput
        name={name}
        value={value}
        onChange={cbFunc}
      />
    </BlockPassword>
  );
};