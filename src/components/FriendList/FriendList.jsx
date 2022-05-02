import PropTypes from 'prop-types';

import { FriendListItem } from "./FriendListItem";
import styles from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
          {friends.map(({id, avatar, name, isOnline}) => (
            <li key={id} className="item">
              <FriendListItem
                 avatar= {avatar}
                 name={name}
                 isOnline= {isOnline}
              />       
            </li>
          ))}
        </ul>
      );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired
  }