import styled from "styled-components";

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
  margin: 8px;

`;
export const InputCreateRoom = styled.input`
  width: 80%;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
  padding-left: 16px;
`;
export const BodyCreateRoom = styled.textarea`
  width: 80%;
  height: 200px;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
  padding-left: 16px;
`;
export const SubmitCreateRoom = styled.input`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
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
export const BackCreateRoom = styled.button`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin-left:15%;
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
export const FormCreateRoom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ErrBlock=styled.div`
color:red;
width:36%;
margin-left: auto;
margin-right: auto;
font-size: 16px;

`