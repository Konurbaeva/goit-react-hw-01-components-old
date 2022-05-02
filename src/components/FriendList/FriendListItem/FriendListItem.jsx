import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
       <div>
        <span className={isOnline ? styles.status_online : styles.status_offline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </div>
    );
  }; 

  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }