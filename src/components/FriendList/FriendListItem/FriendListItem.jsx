import PropTypes from 'prop-types';
import styled from 'styled-components'

const SpanOnline = styled.span`
font-size: 1.5em;
text-align: center;
background-color: #35bb23;
width: 30px;
height: 30px;
border-radius: 50%;
`;

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
       <div>
        {isOnline && <SpanOnline> <span class="status">Yes</span></SpanOnline>}
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