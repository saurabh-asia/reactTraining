import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

  const loginname = useSelector((state) => state.loginName);

  return (
    <div>
      {loginname ? 'Welcome' + loginname : 'Home'}
    </div>
  );
};

export default Home;