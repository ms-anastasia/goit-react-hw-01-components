import PropTypes from 'prop-types';

function Statistics({ items }) {
  return (
<section class="statistics">
  <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {items.map(item => (
    <li key={item.id}>
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}</span>
    </li>
      ))}
  </ul>
</section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;