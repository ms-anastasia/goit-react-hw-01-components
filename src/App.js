import React from "react";

import Profile from './components/user-profile/Profile';
import Statistics from './components/statistic/Statistic';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-history/Transaction-History';

import user from './components/user-profile/user.json';
import data from './components/statistic/data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';


export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}