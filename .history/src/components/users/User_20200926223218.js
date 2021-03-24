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
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              style={{ width: '150px' }}
            />
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio : </h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-light my-1'>
              Visit Github Profile
            </a>
          </div>
        </div>
        <h1>{name}</h1>
        <p>Location : {location}</p>
        Hireable :{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
      </Fragment>
    );
  }
}

export default User;