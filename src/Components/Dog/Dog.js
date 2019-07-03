import React from 'react';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dogShape: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;

    return (
      <div className="dog col-3">
        <div className="card">
          <img src={dog.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <p className="card-text">Age: {dog.age}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
