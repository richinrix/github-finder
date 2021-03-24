import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_USERS,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initalState);

  //Search users
  //Get user
  //Get repos
  //Clear users
  //Set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    ></GithubContext.Provider>
  );
};
