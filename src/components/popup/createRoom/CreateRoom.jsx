import React from "react";
import { FormField } from "../../elementInput/FormField";
import {
   HCreateRoom,
   SubmitCreateRoom,
   BackCreateRoom,
   FormCreateRoom,
   ErrBlock
} from "./createRoomComponent";
import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { createRoom } from "../../../store/roomsSlice";
import { Modal, ModalContent } from "../Modal";


export const CreateRoom = ({ active, setActive }) => {
   function containsCyrillic(text) {
      const cyrillicPattern = /[\u0400-\u04FF]/;
      return cyrillicPattern.test(text);
    }
   const [topic, setTopic] = useState("");
   const [body, setBody] = useState("");
   const [value, setValue] = useState()
   const dispatch = useDispatch();
   const error = useSelector(state => state.users.error)
 const handleCreate=()=>{
 if(containsCyrillic(topic)){
   return
 };

   if (!topic) {
      setValue("Some fields are not filled");
      return
   } 
   if(!body){
      dispatch(createRoom({ topic, setActive }));
      setTopic("");
      setBody("");

      return
   }else{
      dispatch(createRoom({ topic,body, setActive }));
      setTopic("");
      setBody("");
   }
 }


   return (
      <Modal className={active ? "active" : ""}>
         <ModalContent>
            <HCreateRoom>Create a new room</HCreateRoom>
            <div
                  style={{
                     maxHeight: '50px',
                     overflowY: "auto"
                  }} >{error && `${error}`}</div>
            <FormCreateRoom
               onSubmit={event => {
                  event.preventDefault();
                  handleCreate()
               }}
            >
               <FormField
                  type={"text"}
                  value={topic}
                  label="Room name"
                  // regExp={
                  //   /^ [a-zA-Z0-9!@#$%^&*]+$/gm
                  // }
                  cbFunc={(event )=> {
                     setTopic(event.target.value)
              
                     }
                  }
               />
               <FormField
                  type={"textarea"}
                  value={body}
         
                  label="Description (optional)"
                  cbFunc={event => setBody(event.target.value)}
               />
               <ErrBlock>{value}</ErrBlock>
               <SubmitCreateRoom type={"submit"} value={"Create"} />
            </FormCreateRoom>
            <BackCreateRoom
               onClick={() => {
                  setActive(false);
               }}
            >
               Back
            </BackCreateRoom>
         </ModalContent>
      </Modal>
   );
};
