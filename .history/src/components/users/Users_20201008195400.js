import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = ({ users, loading }) => {
  const githubContext = usecontext(GithubContext);
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div style={gridStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};
Users.propTypes = {
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const gridStyle = {
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(3,1fr)',
};

export default Users;
