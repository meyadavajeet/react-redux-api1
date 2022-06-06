import React, {useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { userAction } from './redux/actions/UserAction';
import User from './components/User';

const App = () => {

  const dispatch = useDispatch();
  const userReducers = useSelector(state => state.userReducers);
  const { loading, users, error } = userReducers;

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch]);

  return (
    <>
      <h1>Welcome to Redux Thunk</h1>
      {
        loading ? (<h2>loading</h2>)
          : error ? (<h2>{error}</h2>)
            : (<User users={users} />)
      }
    </>
  );
}

export default App;
