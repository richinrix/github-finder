import React, { Component } from 'react';

class search extends Component {
  state = {
    text: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form action='' className='form'>
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
      </div>
    );
  }
}

export default search;
