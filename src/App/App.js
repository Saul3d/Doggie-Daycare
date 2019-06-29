import React from 'react';
import StaffRoom from '../Components/StaffRoom/StaffRoom';
import myStaff from './staff';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    staffPeople:[], 
  }

  componentDidMount(){
    this.setState({staffPeople: myStaff})
  }

  render() {
    const { staffPeople } = this.state;
    return (
      <div className="App">
        <StaffRoom staffPeople={staffPeople} />
      </div>
    );
  }
}

export default App;
