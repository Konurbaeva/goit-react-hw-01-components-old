import PropTypes from 'prop-types';
import styled from 'styled-components'


/* display: flex;
-webkit-box-align: center;
align-items: center;
padding: 8px;
margin-bottom: 10px;
border: 1px solid rgb(85, 123, 131);
border-radius: 5px;
 */


const Span = styled.span`
font-size: 1.5em;
text-align: center;
background-color:yellow;
`;

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
       <div>
        {isOnline && <Span><span className="status">Online</span></Span>}
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