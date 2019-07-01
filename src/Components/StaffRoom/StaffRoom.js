import React from 'react';
import PropTypes from 'prop-types';

import staffShape from '../../helpers/propz/staffShape';

import './StaffRoom.scss';
import Staff from '../Staff/Staff';

class StaffRoom extends React.Component{
  static propTypes = {
    staffRoomShape: PropTypes.arrayOf(staffShape.staffShape),
  }
  render(){
    const { staff } = this.props;
    console.error('saul', staff);
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