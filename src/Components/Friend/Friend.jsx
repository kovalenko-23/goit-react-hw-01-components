import PropTypes from 'prop-types'
import s from './Friend.module.css';
import defaultImage from '../Profile/profile.svg'
import {FaGrin} from 'react-icons/fa';
import {FaFrown} from 'react-icons/fa';


function Friend({ avatar, name, status }) {
if (avatar !== true) {
    avatar = defaultImage;
}


return (
    <li className={s.item}>
        <span className={s.status}>{status === true ?
            <FaGrin className={s.iconStatus} size={18} color='green' /> :
            <FaFrown className={s.iconStatus} size={18} color='red' />}</span>
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