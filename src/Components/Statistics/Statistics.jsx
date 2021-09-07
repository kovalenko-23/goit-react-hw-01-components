import s from './Statistics.module.css'
import PropTypes from 'prop-types'
import Stat from '../Stat/Stat';

function Statistics({ stats, title }) {
    // let titleStyle = null;
    
    // if (!title) {
    //     titleStyle = {display: "none"};
    // }

    return (
        <section className={s.statistics}>
        <h2 className={s.title}>{title ?? title}</h2>
        <ul className={s.stat_list}>
        {stats.map(item => (
            <Stat
                key={item.id}
                id={item.id}
                label={item.label}
                percentage={item.percentage}
            />
        ))}        
        </ul>
        </section>
    );
}

Statistics.protoType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired
    }),),
}

export default Statistics;