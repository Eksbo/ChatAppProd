import styled from "styled-components";
import { PasswordInput } from "@skbkontur/react-ui";


export const HCreateRoom = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  margin-left: auto;
`;
export const PCreateRoom = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;

 
`;
export const InputCreateRoom = styled.input`
  width: 80%;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
  padding-left: 16px;
  
`;

export const SubmitUpdateUser = styled.input`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin: 24px;
  height: 40px;
  width: 50%;
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

export const BackButton = styled.button`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin: 24px;
  height: 40px;
  width: 40%;
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
export const DeleteUserButton = styled.button`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin: 24px;
  height: 40px;
  width: 40%;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  margin-top: 4vh;
  &&:hover {
    background-color: #888888;
  
  }
  &&:active {
    background-color: #d86800;

  }
`;

export const BlockButton = styled.div`
  display:flex;
`
;

;
export const FormUpdateUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BlockPassword = styled.div`
width:90%;

`
export const StyledEmail = styled.p`
  font-size: 24px;
   color: white;
     font-weight: 600;

`
const StyledPasswordInput = styled(PasswordInput)`
  width: 10%;
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