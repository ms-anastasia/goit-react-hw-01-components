import PropTypes from 'prop-types';
import s from "./Statistic.module.css";
import getRandomColor from "./random-color";

function Statistics({ title, stats }) {
  return (
  <section className={s.Statistics}>
    {title && <h2 className={s.Title}>{title}</h2>}
        <ul className={s.List}>
          {stats.map(item => (
          <li className={s.Item} key={item.id} style={{ backgroundColor: getRandomColor() }}>
            <span className={s.Label}>{item.label}</span>
            <span className={s.Percentage}>{item.percentage}%</span>
          </li>
          ))}
        </ul>
  </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;