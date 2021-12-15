import React from "react";

import Profile from './components/userProfile/Profile';
import Statistics from './components/statistic/Statistic';

import user from './components/userProfile/user.json';
import data from './components/statistic/data.json';


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
    </div>
  );
}