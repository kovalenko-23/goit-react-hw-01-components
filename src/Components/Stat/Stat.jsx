import s from './Stat.module.css';
import PropTypes from 'prop-types'


function Stat({label, percentage}) {
    return (
         <li className={s.description}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    )
}

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Stat;