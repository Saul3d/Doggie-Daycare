import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';
import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogPenShape: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dog } = this.props;
    const makeDog = dog.map(singleDog => (
      <Dog key={singleDog.id} dog={singleDog} />
    ));
    return (
      <div className="dogPen d-flex flex-wrap">
        { makeDog }
      </div>
    );
  }
}

export default DogPen;
