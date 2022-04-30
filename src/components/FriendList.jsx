import { FriendListItem } from "./FriendListItem";

  export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
          {friends.map(item => (
            <li key={item.id}>
              <FriendListItem
                 avatar= {item.avatar}
                 name={item.name}
                 isOnline= {item.isOnline}
              />
            </li>
          ))}
        </ul>
      );
  };