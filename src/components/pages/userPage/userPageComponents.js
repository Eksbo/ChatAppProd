import styled from "styled-components";

export const Body = styled.div`
  background-color: rgb(40, 151, 151);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(40, 151, 151);
  border-bottom:1px solid white;
  width: 100%;

  color: white;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
export const ChatBody = styled.div`
  width: 100%;
  display: flex;
  padding-top: 4vh;
`;
export const ToolsBlock = styled.div`
box-sizing: border-box;
  width: 40%;
  border: 1px solid white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 32px;
  margin: 16px;
  margin-top: -1%;
`;
export const ContentBlock = styled.div`
  width: 60%;
  padding: 2vh;
`;
export const SearchUser = styled.input`
  width: 70%;
  font-size: 24px;
  font-weight: 600;

  padding-left: 16px;
  border-radius: 24px;
  margin-top: 24px;
`;
export const ButtonCreateRoom = styled.button`
  border: 1px solid white;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin-bottom: 4vh;
  height: 40px;
  width: 80%;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  &&:hover {
    background-color: #888888;

  }
  &&:active {
    background-color: #d86800;
    font-weight: 600;
  }
`;

export const ButtonSettingUser = styled.button`

border: 1px solid white;
border-radius: 8px;

  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  height: 40px;
  width: 10%;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  padding: 8px;
  margin-left: 400px;
  margin-right:32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &&:hover {
    background-color: #888888;

  }
  &&:active {
    background-color: #d86800;
 
  }
`;
export const Block = styled.div`
width: 80%;
border: 1px solid white;
color: white;
margin-left: auto;
margin-right: auto;
border-radius: 24px;
margin-top:0;
`;
export const BlockButtonSetting = styled.div`
width: 40%;
border: 1px solid white;
color: white;
margin-left: auto;
margin-right: auto;
border-radius: 24px;
margin-top: 32px;
display: flex;
justify-content: center;
align-items: center;
`;
export const NameBlock= styled.h4`
color: white;
`