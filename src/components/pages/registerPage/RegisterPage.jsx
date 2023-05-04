import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Logo} from "../../../icon/Logo";
import {useNavigate} from "react-router-dom";
import {FormField} from "../../elementInput/FormField";
import { useSelector } from "react-redux";
import {
    Body,
    RegisterBody,
    FormRegister,
    PInputUserRegister,
    HInputUserRegister,
    ButtonUserRegister,
    ErrBlock,
} from "./registerPageComponent";
import {useDispatch} from "react-redux";
import {loginUser, registerUser} from "../../../store/userSlice";

export const RegisterPage = () => {
    // const user = useSelector(state => state.users.user);
    // const error = useSelector(state => state.users.error);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [value, setValue] = useState();
    const error=useSelector(state=>state.users.error)
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setValue('Password and confirm password do not match')
            return
        }
        if (!email || !password || !username) {
            setValue("Some fields are not filled");
        } else {
            setValue("");
            dispatch(registerUser({email, password, username}))
                .then(() => {
                    dispatch(loginUser({email, password}))
                        .then(() => {
                            navigate("/user");
                        });
                });
        }
        if(error){
            setValue(error)
        }
    };

    return (
        <Body>
            <RegisterBody>
                <Logo width={350}/>
                <HInputUserRegister>Create Account</HInputUserRegister>

                <PInputUserRegister>Create your free account</PInputUserRegister>
                <ErrBlock>
                    {value}
                </ErrBlock>
                <FormRegister name="userRegister" onSubmit={handleSubmit}>
                    <FormField
                        type="text"
                        label="Username"
                        regExp={/^[a-zA-Z]+$/gm}
                        errorText="User name no valid"
                        value={username}
                        cbFunc={e => setUsername(e.target.value)}
                    />

                    <FormField
                        type="text"
                        label="Email"
                        regExp={
                            /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+\.[a-z0-9-.]+$/gm
                        }
                        errorText="Email name no valid"
                        value={email}
                        cbFunc={e => setEmail(e.target.value)}
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

                    <ButtonUserRegister type="submit" value="create user"/>
                </FormRegister>
                <PInputUserRegister>
                    Have an account?
                    <Link
                        to="/login"
                        style={{
                            color: "red",
                            marginLeft: "8px",
                            textDecoration: "none",
                        }}
                    >
                        Log in
                    </Link>
                </PInputUserRegister>
            </RegisterBody>
        </Body>
    );
};
