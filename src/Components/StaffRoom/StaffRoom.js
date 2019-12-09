import React from 'react';
import PropTypes from 'prop-types';

import staffShape from '../../helpers/propz/staffShape';
import staffData from '../../helpers/data/staffData';
import Staff from '../Staff/Staff';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    staffRoomShape: PropTypes.arrayOf(staffShape.staffShape),
  }

  state = {
    staffs: [],
  }

  componentDidMount() {
    staffData.getMyStaff()
      .then(staffs => this.setState({ staffs }))
      .catch(err => console.error('Could not get dogs', err));
  }

  render() {
    const { staffs } = this.state;
    const makeStaff = staffs.map(staffPerson => (
      <Staff key={staffPerson.id} staff={staffPerson} />
    ));

    return (
      <div className="staffRoom d-flex flex-wrap">
        <h1>Staff</h1>
        { makeStaff }
      </div>
    );
  }
}

export default StaffRoom;
