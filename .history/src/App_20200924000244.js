import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}>
            {console.log('users type:', typeof this.state.users)}
          </Users>
        </div>
      </div>
    );
  }
}

export default App;
