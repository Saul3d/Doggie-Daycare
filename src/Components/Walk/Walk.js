import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { walk, deleteWalk } = this.props;
    deleteWalk(walk.id);
  };

  editMe = (e) => {
    e.preventDefault();
    const { walk, editWalk } = this.props;
    editWalk(walk);
  };

  render() {
    const { walk, dog, staff } = this.props;
    return (
      <div className="walk col">
        <div className="card">
          <div className="card-body">
            <h4>{walk.date}</h4>
            <h6>{staff.name}</h6>
            <h3 className="card-title">{dog.name}</h3>
            <button onClick={this.deleteMe} className="btn btn-danger">Delete</button>
            <button onClick={this.editMe} className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
