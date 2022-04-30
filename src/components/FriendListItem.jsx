export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
       <div>
        {/* <span className="status">{isOnline? 'Yes' : 'No' }</span> */}

        <span className="status">{isOnline && 'Yes'}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </div>
    );
  }; 