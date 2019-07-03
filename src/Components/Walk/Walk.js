import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="walk col-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{walk.dogId}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
