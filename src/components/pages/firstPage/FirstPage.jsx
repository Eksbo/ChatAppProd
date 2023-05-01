import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../icon/Logo";
import{BtnLink ,PLogin,Body,LoginBody}from "./firstPageComponent"

export const FirstPage = () => {
  return (
    <Body>
      <LoginBody>
        <Logo width={350}/>
        <PLogin>Are you here for the first time or do you have an account?</PLogin>
        <BtnLink>
          <Link style={{ color: "white", textDecoration: "none" }} to="/Login">
            Sing in
          </Link>
        </BtnLink>
        <BtnLink>
          <Link style={{ color: "white", textDecoration: "none" }} to="/register">
            Create account
          </Link>
        </BtnLink>
      </LoginBody>
    </Body>
  );
};


