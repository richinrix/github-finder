import React, { Component } from 'react';

class search extends Component {
  render() {
    return (
      <div>
        <form action='' className='form'>
          <input type='text' name='text' placeholder='Search..' />
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
