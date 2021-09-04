import s from './Stat.module.css';
import PropTypes from 'prop-types'


function Stat({ label, percentage}) {
    const typeOfLabel = label.split("").slice(1).join("");
    return (
        <li className={s[typeOfLabel]}>
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