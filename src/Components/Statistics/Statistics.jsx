import s from './Statistics.module.css'
import PropTypes from 'prop-types'
import Stat from '../Stat/Stat';

function Statistics({stats}) {
    return (
        <section className={s.statistics}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.stat_list}>
        {stats.map(item => (
            <Stat
                key={item.id}
                label={item.label}
                percentage={item.percentage}
            />
        ))}        
        </ul>
        </section>
    );
}

Statistics.protoType = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired
    }),),
}

export default Statistics;