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
    staff: [],
    dog: [],
    walk: [],
  }

  componentDidMount() {
    staffData.getMyStaff()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('Could not get staff', err));

    dogData.getMyDogs()
      .then(dog => this.setState({ dog }))
      .catch(err => console.error('Could not get dogs', err));

    walkData.getMyWalks()
      .then(walk => this.setState({ walk }))
      .catch(err => console.error('Could not get walks', err));
  }

  deleteWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => this.getMywalks())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { staff, dog, walk } = this.state;
    // const makeWalkScheduleCard = this.state.walk.map((schedule, index) => (

    //   <WalkSchedule
    //   key={schedule.id}
    //   dogName={dog.dogName}
    //   walk={walk}
    //   staffName = {staff.Name}
    //   />
    // ));

    return (
      <div>
        <h1>Dogs</h1>
        <DogPen dog={dog} />
        <h1>Staff</h1>
        <StaffRoom staff={staff} />
        <h1>Walks</h1>
       <WalkSchedule walk={walk} dog={dog} staff={staff} deleteWalk={this.deleteWalk} />
      </div>
    );
  }
}
export default Home;
