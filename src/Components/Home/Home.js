import React from 'react';
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

  getMyData = () => {
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

  componentDidMount() {
    this.getMyData();
  }

  deleteWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => this.getMyData())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { staffs, dogs, walks } = this.state;

    return (
      <div>
        <h1>Walks</h1>
        <WalkSchedule walks={walks} dogs={dogs} staffs={staffs} deleteWalk={this.deleteWalk} />
      </div>
    );
  }
}
export default Home;
