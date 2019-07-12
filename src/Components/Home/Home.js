import React from 'react';

import StaffRoom from '../StaffRoom/StaffRoom';
import DogPen from '../DogPen/DogPen';
import WalkSchedule from '../WalkSchedule/WalkSchedule';

import staffData from '../../helpers/data/staffData';
import dogData from '../../helpers/data/dogData';
import walkData from '../../helpers/data/walkData';

import './Home.scss';

class Home extends React.Component {
  state = {
    staffs: [],
    dogs: [],
    walks: [],
  }

  componentDidMount() {
    staffData.getMyStaff()
      .then(staffs => this.setState({ staffs }))
      .catch(err => console.error('Could not get staff', err));

    dogData.getMyDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('Could not get dogs', err));

    walkData.getMyWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('Could not get walks', err));
  }

  deleteWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => this.getMyWalks())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { staffs, dogs, walks } = this.state;

    return (
      <div>
        {/* <h1>Dogs</h1>
        <DogPen dogs={dogs} />
        <h1>Staff</h1>
        <StaffRoom staffs={staffs} /> */}
        <h1>Walks</h1>
       <WalkSchedule walks={walks} dogs={dogs} staffs={staffs} deleteWalks={this.deleteWalk} />
      </div>
    );
  }
}
export default Home;
