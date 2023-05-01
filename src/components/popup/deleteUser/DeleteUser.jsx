
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal ,ModalContent} from '../Modal'
import {deleteUser}from "../../../store/userSlice"
import {
    HDeleteUser,
    ButtonDeleteUser,
    ButtonBackDeleteUser,
    BlockButton
}from "./deleteUserComponent"
import { useDispatch } from "react-redux";
export const DeleteUser = ({active,id,setActive}) => {
    const navigate=useNavigate()
  const  dispatch=useDispatch()
  return (
    <Modal className={active ? "active" : ""}>
        <ModalContent>
<HDeleteUser>
Are you sure you want to delete your profile? This is 
an irreversible action. Note that all of your rooms will 
also be deleted.
</HDeleteUser>
<BlockButton>
    <ButtonBackDeleteUser
    onClick={()=>{
        setActive(false)
    }}
    >Back</ButtonBackDeleteUser>
    <ButtonDeleteUser
    onClick={()=>{
        dispatch(deleteUser({id}))
        navigate('/login')
    }}
    >Delete</ButtonDeleteUser>
</BlockButton>
        </ModalContent>
        
</Modal>
  )
}
