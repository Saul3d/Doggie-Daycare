import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
// import Dogs from '../Dog/Dog';
// import Staff from '../Staff/Staff';
import Walk from '../Walk/Walk';


import './WalkSchedule.scss';

class WalkSchedule extends React.Component {
    static propTypes = {
      walkPenShape: PropTypes.arrayOf(walkShape.walkShape),
    }

    render() {
      const { dog } = this.props;
      const { staff } = this.props;
      const { walk } = this.props;
      const { deleteWalk } = this.props;
      // const getMissingProps = () => {dog.find((walk.dogId) => walk.dogId === dog.id)};
      // };

      const makeWalkCardSchedule = walk.map(schedule => (
        <Walk key={schedule.id} walk={schedule} dog={this.props.dog} deleteWalk={this.deleteWalk}/>
      ));
      return (
        <div className="walkCardSchedule-container d-flex flex-wrap">
          {makeWalkCardSchedule}
        </div>
      );
    }
}

export default WalkSchedule;
