import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';
import dogData from '../../helpers/data/dogData';
import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogPenShape: PropTypes.arrayOf(dogShape.dogShape),
  }

  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getMyDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('Could not get dogs', err));
    // const dogId = this.props.match.params.id;
    // dogData.deleteDog(dogId)
    //   .then(dogPromise => this.setState({ dog: dogPromise.data }))
    //   .catch(err => console.error('could not delete dog', err));
  }

  render() {
    const { dogs } = this.state;
    const makeDog = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="dogPen d-flex flex-wrap">
        <h1>Hello DogPen</h1>
        { makeDog }
        {/* {console.error(dogs, 'calling this from dogpen')} */}
      </div>
    );
  }
}

export default DogPen;
