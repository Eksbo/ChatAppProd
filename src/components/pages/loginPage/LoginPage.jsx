import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../icon/Logo";
// import { PasswordInput } from "@skbkontur/react-ui";
import { useNavigate } from "react-router-dom";
import {
  Body,
  LoginBody,
  LabelUserLogin,
  ErrBlock,
  ButtonUserLogin,
  HInputUserRegister,
  PInputUserRegister,
  Form,

} from "./loginPageComponents";
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../../store/userSlice";
import { FormField } from "../../elementInput/FormField";

export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.users.isAuth);

  const handleLogin = () => {
    try {
      dispatch(loginUser({ email, password }))
    } catch (error) {
      setErr(error);
    }}

    useEffect(() => {
        if (isAuth) {
            navigate("/user")
        }
    }, [isAuth]);

  return (
    <Body>
      <LoginBody>
        <Logo width={350} />
        <HInputUserRegister>Log in</HInputUserRegister>
        <ErrBlock>
          {err}
        </ErrBlock>

        <Form
          name="userLogin"
          onSubmit={async event => {
            event.preventDefault();
            if (!email || !password) {
              setEmail("");
              setPassword("");
             setErr('Some fields are not filled')
             return
            }
            handleLogin();
            // setEmail("");
            // setPassword("");
          }}
        >
                    <FormField
            type="text"
            label="Email"
            regExp={/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+\.[a-z0-9-.]+$/gm}
           
            errorText="Email name no valid"

            value={email}
            cbFunc={e => setEmail(e.target.value)}
          />
                 <FormField
            type="password"
            label="New password"
            regExp={/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/gm}
            errorText="password no valid"
            value={password}
            cbFunc={e => setPassword(e.target.value)}
          />

          <LabelUserLogin>
            <ButtonUserLogin>Sing in</ButtonUserLogin>
          </LabelUserLogin>
        </Form>
        <PInputUserRegister>
          No account?
          <Link
            to="/register"
            style={{
              color: "red",
              marginLeft: "8px",
              textDecoration: "none",
            }}
          >
            Sing up
          </Link>
          <Link
            to="/forgot"
            style={{ color: "red",
             marginLeft: "40px", 
             textDecoration: "none" ,
             "@media(max-width: 575px)": {
              fontSize:'12px',
              marginLeft: "16px", 
            }
            }}
          >
            Forgot password?
          </Link>
        </PInputUserRegister>
      </LoginBody>
    </Body>
  );
};
