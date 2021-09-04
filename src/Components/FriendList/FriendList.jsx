import s from './FriendList.module.css';
import Friend from '../Friend/Friend';
import PropTypes from 'prop-types'


function FriendList({friends}) {
    return (
        <ul className={s.friend__list}>
            {friends.map(friend => (
                    <Friend
                        key={friend.id}
                        id={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}
                    />
            ))}
        </ul >)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default FriendList;