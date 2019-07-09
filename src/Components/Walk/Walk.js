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

  render() {
    const { walk, dog, staff } = this.props;
    return (
      <div className="walk col-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{walk.dogId}</h3>
            <button onClick={this.deleteMe} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
