import React from 'react';
import PropTypes from 'prop-types';

import staffShape from '../../helpers/propz/staffShape';
import Staff from '../Staff/Staff';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    staffRoomShape: PropTypes.arrayOf(staffShape.staffShape),
  }

  render() {
    const { staff } = this.props;
    const makeStaff = staff.map(staffPerson =>(
      <Staff key={staffPerson.id} staff={staffPerson} />
    ));

    return (
      <div className="staffRoom d-flex flex-wrap">
        { makeStaff }
      </div>
    );
  }
}

export default StaffRoom;