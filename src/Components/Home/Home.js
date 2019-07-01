import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import StaffRoom from '../StaffRoom/StaffRoom';
import staffData from '../../helpers/data/staffData';
import './Home.scss';

class Home extends React.Component {
  state = {
    staff: [],
    dogs: [], 
  }

  getStaff = () => {
    staffData.getMyStaff(firebase.auth().currentUser.uid)
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('cant get orders', err));
  }
  componentDidMount() {
    staffData.getMyStaff()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('Could not get fishes', err));

    this.getStaff();
  }
  render() {
    const { staff } = this.state;
    return (  
      <StaffRoom staff={staff} />
    );
  }
}
export default Home;