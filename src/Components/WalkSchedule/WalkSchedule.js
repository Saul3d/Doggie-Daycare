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
      const { dogs } = this.props;
      const { staffs } = this.props;
      const { walks } = this.props;
      const { deleteWalks } = this.props;
      const getMissingDogProps = dogId => dogs.find(d => dogId === d.id) || {};

      console.error(dogs);
      const makeWalkCardSchedule = walks.map(schedule => (

        <Walk
        key={schedule.id}
        walk={schedule}
        dog={getMissingDogProps(schedule.dogId)}
        deleteWalk={this.deleteWalk}
        />
      ));

      return (
        <div className="walkCardSchedule-container d-flex flex-wrap">
          {makeWalkCardSchedule}
        </div>
      );
    }
}

export default WalkSchedule;
