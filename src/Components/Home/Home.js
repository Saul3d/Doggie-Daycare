import React from 'react';

import StaffRoom from '../StaffRoom/StaffRoom';
import DogPen from '../DogPen/DogPen';
import WalkSchedule from '../WalkSchedule/WalkSchedule';
// import Walk from '../Walk/Walk';
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
      .catch(err => console.error('Could not get staff', err));

    walkData.getMyWalks()
      .then(walk => this.setState({ walk }))
      .catch(err => console.error('Could not get walks', err));
  }

  // makeWalk = () => (this.state.walk.map(singleWalk => (
  //       <Walk key={singleWalk.id} walk={singleWalk} />)));

  render() {
    const { staff, dog, walk } = this.state;
    // const { walk } = this.props;
    console.error('help ', walk);
    return (
      <div>
        <h1>Dogs</h1>
        <DogPen dog={dog} />
        <h1>Staff</h1>
        <StaffRoom staff={staff} />
        <h1>Walks</h1>
        {/* <div className="walk-container d-flex flex-wrap">
          {this.makeWalk()} */}
          <WalkSchedule dog={dog} staff={staff} walk={walk} />
        </div>
    // </div>
    );
  }
}
export default Home;
