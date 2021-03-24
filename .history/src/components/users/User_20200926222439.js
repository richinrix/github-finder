import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      following,
      public_repos,
      hireable,
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner></Spinner>;
    return (
      <Fragment>
        <Link to='/' className='btn btn-dark'>
          Back
        </Link>
        Hireable :{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas text-danger'>x</i>
        )}
      </Fragment>
    );
  }
}

export default User;
