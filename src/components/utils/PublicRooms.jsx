import { Room, RoomName, BlockMyRooms } from "./myRoomBlock/myRoomsBlockComponent";
import { v4 as uuidv4 } from "uuid";


export function PublicRooms({  usersPublic, setContentBody }) {
  
  return (
    <BlockMyRooms>
      {usersPublic.map((elem) => {
        return (
          <Room key={uuidv4()}>
            <RoomName
              onClick={() => {
                let idRoom = elem._id;
                setContentBody(idRoom);
              }}
              key={elem.id + elem.name}
            >
              {elem.name}
            </RoomName>
          </Room>
        );
      })}
    </BlockMyRooms>
  );
}
