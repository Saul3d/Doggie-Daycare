import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Dogs from '../Dog/Dog';
import Staff from '../Staff/Staff';


import './WalkSchedule.scss';

class WalkSchedule extends React.Component {
    static propTypes = {
        walkPenShape: PropTypes.arrayOf(walkShape.walkShape),
     }
    render() {
        const { dog } = this.props;
        const { staff } = this.props;
        const { walk } = this.props;

        const makeWalk = Staff.map(value, index => (
            // const walkedDogName = Dogs[index]
            // <WalkSchedule key={singleDog.id} WalkSchedule={singleDog} />
          ));
        return (

        );
    }
}

export default WalkSchedule;
