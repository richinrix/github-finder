import React, { Component } from 'react';

class search extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <div>
        <form action='' className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search..'
            value={this.state.text}
            onChange={this.state.OnChange}
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
