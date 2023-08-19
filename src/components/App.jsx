import userCards from 'data/user.json';
import transactionsList from 'data/transactions.json';
import statisticLists from 'data/data.json';
import friendsList from 'data/friends.json';
import { ProfileCards } from './ProfileCards/profileCard/ProfileCards';
import { Statistics } from './Statistics/statistics/Statistics';
import { FriendList } from './FriendList/friendList/FriendList';
import { TransactionHistory } from './Transaction/transactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <ProfileCards users={userCards} />
      <Statistics title="Upload stats" stats={statisticLists} />
      <FriendList friends={friendsList} />
      <TransactionHistory transactions={transactionsList} />
      <GlobalStyle />
    </Layout>
  );
};
