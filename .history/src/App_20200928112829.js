import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

// Main code
const App =()=> {
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [alert,setAlert]=useState(null);
  
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data });
  }

  //searching tab
  searchUsers = async (text) => {
    setLoading( true );
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items)
    setLoading(false)
    
  };

  //geting info of a single user
  getUser = async (username) => {
    
    setLoading( true );
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data)
    setLoading(false)
    
  };

  //getting users repos
  getUserRepo = async (username) => {
    
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false)
    setRepos(res.data)
    
  };

  //clearing users
  clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  //alerting for empty string
  setAlert = (msg, type) => {
    setAlert({msg,type})
    
    setTimeout(() => setAlert(null),5000);
  };
  

    return (
      <Router>
        <div className='App'>
          <Navbar></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              {/* homeroute */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    ></Search>
                    <Users loading={loading} users={users}></Users>
                  </Fragment>
                )}
              ></Route>
              {/* About */}
              <Route exact path='/about' component={About}></Route>
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    repos={repos}
                    getUserRepo={this.getUserRepo}
                  ></User>
                )}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }


export default App;
