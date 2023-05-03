import React from "react";
import { Logo } from "../../../icon/Logo";
import { LogOutIcon } from "../../../icon/LogOutIcon";
import { UserIcon } from "../../../icon/UseIcon";
import { MyRoomsBlock } from "../../utils/myRoomBlock/MyRoomsBlock";
import { PublicRooms } from "../../utils/PublicRooms";
import { CreateRoom } from "../../popup/createRoom/CreateRoom";
import { DeleteUser } from "../../popup/deleteUser/DeleteUser";
import { DeleteRoom } from "../../popup/deleteRoom/DeleteRoom.jsx";
import { SettingUserRoom } from "../../popup/settingUserRoom/SettingUserRoom";
import { SettingUser } from "../../popup/settingUser/SettingUser";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicRooms, fetchRooms } from "../../../store/roomsSlice";
import { getUser } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";

import {
  Header,
  ChatBody,
  ToolsBlock,
  ContentBlock,
  NameBlock,
  ButtonCreateRoom,
  ButtonSettingUser,
  Block,
  Body,
} from "./userPageComponents";
import { Chat } from "../../core/Chat/Chat";

export const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usersPublic = useSelector(state => state.rooms.public);
  const userTest = useSelector(state => state.users.editUser);

  // const user = useSelector(state => state.users.user);
  const token = localStorage.getItem("token");

  const payload = token ? JSON.parse(atob(token.split(".")[1])) : "";
  const userId = token ? payload.userId : "";

  const [createActive, setCreateActive] = useState(false);
  const [settingActive, setSettingActive] = useState(false);
  const [settingUserActive, setSettingUserActive] = useState(false);
  const [deleteUserActive, setDeleteUserActive] = useState(false);
  const [deleteRoomActive, setDeleteRoomActive] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [contentBody, setContentBody] = useState("");

  useEffect(
    () => {
      if (token) {
        // console.log("effectToken", token);
        const id = JSON.parse(atob(token.split(".")[1])).userId;

        dispatch(getUser(id));
        dispatch(fetchRooms());
        dispatch(fetchPublicRooms());
      } else {
        navigate("/login");
      }
    },
[token]
  );

  return (
    <Body>
      <Block>
        <Header>
          <Logo width={"400"} />
          <ButtonSettingUser onClick={() => setSettingUserActive(true)}>
            {userTest ? userTest.username : "Loading..."}
            <UserIcon width={35} />
          </ButtonSettingUser>

          <LogOutIcon width={40} />
        </Header>
        <ChatBody>
          <ToolsBlock>
            <ButtonCreateRoom
              onClick={() => {
                setCreateActive(true);
              }}
            >
              + Add room
            </ButtonCreateRoom>
            <NameBlock>My rooms</NameBlock>
            <MyRoomsBlock
              setContentBody={setContentBody}
              id={roomId}
              setId={setRoomId}
              setActive={setSettingActive}
            />
            <NameBlock>Public rooms </NameBlock>
            <PublicRooms
              setContentBody={setContentBody}
              usersPublic={usersPublic}
              token={token}
            />
          </ToolsBlock>
          <ContentBlock>
            {contentBody !== "" && <Chat idRoom={contentBody} id={userId} />}
          </ContentBlock>
        </ChatBody>
      </Block>
      <CreateRoom

        active={createActive}
        setActive={setCreateActive}
      />
      <SettingUser
        userTest={userTest}
        id={userId}
        active={settingUserActive}
        setActive={setSettingUserActive}
        setDeleteActive={setDeleteUserActive}
      />
      <SettingUserRoom
        id={roomId}
        active={settingActive}
        setActive={setSettingActive}
        setDeleteRoomActive={setDeleteRoomActive}
      />
      <DeleteUser
        id={userId}
        active={deleteUserActive}
        setActive={setDeleteUserActive}
      />
      <DeleteRoom
        id={roomId}
        active={deleteRoomActive}
        setActive={setDeleteRoomActive}
        setSettingActive={setSettingActive}
      />
    </Body>
  );
};
