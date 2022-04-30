export const FriendListItem = props => {

   // const {avatar, name, isOnline} = props;
    return (
        <li className="item">
        <span className="status">{props.isOnline? 'Yes' : 'No' }</span>
        <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
        <p className="name">{props.name}</p>
      </li>
    );
  }; 