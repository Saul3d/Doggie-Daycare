import React from 'react';
import staffShape from '../helpers/propz/staffShape';

import './Staff.scss';

class Staff extends React.Component {
  static propTypes = {
    staffShape: staffShape.staffShape,
  }
  render() {
    const { staff } = this.props;
    // const image = require(`${staff.imageUrl}`);
    // console.log(staff);
    return(
        <div className="staff col-3">
          <div className="card">
            <img src={staff.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{staff.name}</h3>
              <p className="card-text">Age: {staff.age}</p>
            </div>
          </div>
        </div>
    );
  }
}
export default Staff;