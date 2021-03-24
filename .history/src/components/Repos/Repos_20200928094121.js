import React from 'react';
import PropTypes from 'prop-types';

export const Repos = ({ repos }) => {
  return repos.map((repo) => {
    <RepoItem repo={repo} key={repo.id}></RepoItem>;
  });
};
