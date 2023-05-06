import styled from "styled-components";

export const Modal=styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
transform: scale(0);
 &.active{
  transform: scale(1);
}

`
export const ModalContent=styled.div`
width: 30%;
padding: 24px;
border-radius: 24px;
background-color: #F3EFE9;
@media(max-width: 992px){
	width: 50%;
}
@media(max-width: 768px){
	width: 70%;
}
`