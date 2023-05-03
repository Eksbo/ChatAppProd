import styled from "styled-components";
export const BlockMyRooms = styled.div`

  width: 88%;
  border: 1px solid white;
  border-radius:16px;
  overflow: scroll;
  height: 120px;
  background-color: rgb(40, 151, 151);
  color: black;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: left;
  padding-left: 16px;
  justify-content: top;
  flex-direction: column;
  &&:last-child{
    margin-top: 16px;
}
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color:  rgb(40, 151, 151);
  }
`;
export const Room = styled.div`
  width: 80%;
  margin-top: 16px;
  display: flex;
  cursor: pointer;
`;
export const RoomName = styled.div`
  border: 1px solid white;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width:100%;
  padding: 4px;
  font-size: 16px;
  border-radius: 8px;
`;
export const RoomSating = styled.button`
margin-left: 8px;
background-color:  rgb(40, 151, 151);
border: 1px solid white;
border-radius: 8px;
cursor: pointer;
`;
export const NameBlock=styled.h3`
color:white;

`