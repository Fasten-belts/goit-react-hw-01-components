import PropTypes from 'prop-types';
import { TransactionList } from '../transactionList/TransactionList';
import { Table, TableHeading, TableRaw } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <TableRaw>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRaw>
      </thead>
      <TransactionList transactions={transactions} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
