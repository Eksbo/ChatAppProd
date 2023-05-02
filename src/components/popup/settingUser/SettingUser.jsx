import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormField } from "../../elementInput/FormField";
import {
  HCreateRoom,
  DeleteUserButton,
  BlockButton,
  BackButton,
  SubmitUpdateUser,
  FormUpdateUser,
  StyledEmail,
} from "./settingUserComponent";
import { Modal, ModalContent } from "../Modal";
import { pathUser } from "../../../store/userSlice";

export const SettingUser = ({
  id,
  active,
  setActive,
  userTest,
  setDeleteActive,
}) => {
  const result = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = ({ id, username, email, password }) => {
    if (password === confirmPassword) {
      dispatch(pathUser({ id, username, email, password }));
      setPassword('')
      setConfirmPassword('')
    }
  };

  useEffect(
    () => {
      if (userTest) {
        setUsername(userTest.username);
        setEmail(userTest.email);
      }
      if (result) {
        setActive(false);
      }
    },
    [userTest, setActive, result]
  );

  return (
    <Modal className={active ? "active" : ""}>
      <ModalContent>
        <HCreateRoom>Edit a user profile</HCreateRoom>

        <FormUpdateUser
          onSubmit={event => {
            event.preventDefault();
            handleSubmit({ id, username, email, password });
          }}
        >
          <StyledEmail>
            {email}
          </StyledEmail>
          <FormField
            type="text"
            label="User name"
            regExp={/^[a-zA-Z]+$/gm}
            errorText="User name no valid"
            value={username}
            cbFunc={e => setUsername(e.target.value)}
          />
          <FormField
            type="password"
            label="New password"
            regExp={
              /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/gm
            }
            errorText="password no valid"
            value={password}
            cbFunc={e => setPassword(e.target.value)}
          />
          <FormField
            type="password"
            label="Confirm password"
            regExp={
              /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/gm
            }
            errorText="password no valid"
            value={confirmPassword}
            cbFunc={e => setConfirmPassword(e.target.value)}
          />

          <SubmitUpdateUser type={"submit"} value={"Save"} />
        </FormUpdateUser>
        <BlockButton>
          <DeleteUserButton
            onClick={() => {
              setDeleteActive(true);
            }}
          >
            Delete user
          </DeleteUserButton>
          <BackButton
            onClick={() => {
              setActive(false);
            }}
          >
            Back
          </BackButton>
        </BlockButton>
      </ModalContent>
    </Modal>
  );
};
