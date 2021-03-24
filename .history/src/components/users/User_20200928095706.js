import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepo(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepo: PropTypes.func.isRequired,
    Repos: PropTypes.array.isRequired,
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
            <ul>
              <li>{login && <Fragment>Username : {login} </Fragment>}</li>
              <li>
                {public_repos && (
                  <Fragment>
                    {' '}
                    Public Repos :{' '}
                    <b className='badge badge-primary'>{public_repos}</b>
                  </Fragment>
                )}
              </li>
              <li>{blog && <Fragment>Blog : {blog} </Fragment>}</li>
              <li>
                {following && <Fragment>Following : {following} </Fragment>}
              </li>
            </ul>
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
        <Repos repos={repos}></Repos>
      </Fragment>
    );
  }
}

export default User;
