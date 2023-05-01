import styled from "styled-components";

export const BtnLink = styled.button`
  border: 1px solid white;
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: rgb(40, 151, 151);
  margin: 24px;
  height: 32px;
  width: 80%;
  cursor: pointer;
  border-radius: 8px;
  &&:hover {
    font-weight: 600;
    background-color: #888888;
  }
`;
export const PLogin = styled.p`
  width: 80%;
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const Body = styled.div`
  background-color: rgb(40, 151, 151);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;
export const LoginBody = styled.div`
  width: 30%;
  border: 1px solid white;
  color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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