import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div>
      {' '}
      <nav className='navbar bg-dark'>
        <h1>
          <i className={icon}></i>
          {'  '}
          {title}
        </h1>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>{' '}
    </div>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github-square',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
