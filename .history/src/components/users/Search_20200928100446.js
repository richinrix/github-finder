import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers }) => {
  state = {
    text: '',
  };

  const onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  return (
    <div>
      <form
        onInput={this.onSubmit}
        onSubmit={this.onSubmit}
        action=''
        className='form'
      >
        <input
          type='text'
          name='text'
          placeholder='Search..'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.string.isRequired,
};

export default Search;
