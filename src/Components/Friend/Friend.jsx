import PropTypes from 'prop-types'
import s from './Friend.css';

function Friend({ avatar, name, status }) {
    return (
        <li className={s.item}>
            <span className={s.status}>{status}</span>
            <img className={s.avatar} src={avatar} alt="Friend`s avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>);
}

Friend.propoType = {
    status: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

export default Friend;