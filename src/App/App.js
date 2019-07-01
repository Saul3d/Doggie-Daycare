import React from 'react';
import firebase from 'firebase/app';
// import StaffRoom from '../Components/StaffRoom/StaffRoom';
// import myStaff from './staff';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import Auth from '../Components/Auth/Auth';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import fbConnection from '../helpers/data/connections';
fbConnection();

class App extends React.Component {
  // state = {
  //   staffPeople:[], 
  // }
  state = {
    authed: false,
  }

  // componentDidMount(){
  //   this.setState({staffPeople: myStaff})
  // }
  componentDidMount(){
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed:true });
      } else {
        this.setState({ authed:false });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  render() {

    // const { staffPeople } = this.state;
    // return (
    //   <div className="App">
    //     <StaffRoom staffPeople={staffPeople} />
    //   </div>

    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
<div className="App">
        <Navbar authed={ authed } />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
