import PropTypes from 'prop-types';
import { TableData, TableRaw } from './TransactionList.styled';

export const TransactionList = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TableRaw key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRaw>
      ))}
    </tbody>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
