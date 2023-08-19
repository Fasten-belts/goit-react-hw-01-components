import { ProfileCards } from './ProfileCards/profileCard/ProfileCards';
import userCards from '../user.json';
import { Statistics } from './Statistics/statistics/Statistics';
import statisticLists from '../data.json';
import { FriendList } from './FriendList/friendList/FriendList';
import friendsList from '../friends.json';
import { TransactionHistory } from './Transaction/transactionHistory/TransactionHistory';
import transactionsList from '../transactions.json';
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
