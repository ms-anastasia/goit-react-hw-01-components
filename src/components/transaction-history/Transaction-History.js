import PropTypes from 'prop-types';
import s from "./Transaction-history.module.css";

function TransactionHistory({ items }) {
  return (
  <table className={s.TransactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
        <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
        </tr>
    ))}
  </tbody>
</table>
  );
}

TransactionHistory.propTypes = {
  iteams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default TransactionHistory;