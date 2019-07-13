import React from 'react';

import PropTypes from 'prop-types';
import NewWalk from '../NewWalk/NewWalk';

import walkShape from '../../helpers/propz/walkShape';
// import Dogs from '../Dog/Dog';
// import Staff from '../Staff/Staff';
import Walk from '../Walk/Walk';


import './WalkSchedule.scss';

class WalkSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {
    showModal: false,
  }

  static propTypes = {
    walkPenShape: PropTypes.arrayOf(walkShape.walkShape),
  }

  displayModal = () => {
    // console.error('this is working');
    this.toggleModal();
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  closeModal() {
    console.error(this);
    this.toggleModal();
  }

  render() {
    const { dogs } = this.props;
    const { staffs } = this.props;
    const { walks } = this.props;
    const { deleteWalk } = this.props;
    const getMissingDogProps = dogId => dogs.find(d => dogId === d.id) || {};
    const getMissingStaffProps = employeeId => staffs.find(s => employeeId === s.id) || {};

    const makeWalkCardSchedule = walks.map(schedule => (
      <Walk
        key={schedule.id}
        walk={schedule}
        staff={getMissingStaffProps(schedule.employeeId)}
        dog={getMissingDogProps(schedule.dogId)}
        deleteWalk={deleteWalk}
      />

    ));

    return (
      <div className="walkCardSchedule-container d-flex flex-wrap">
        {makeWalkCardSchedule}
        <NewWalk isOpen={this.state.showModal} closeModal={this.closeModal}/>
        <div className="addWalk col" onClick={this.displayModal}>
        <div className="card">
          <div className="plus-wrapper">
            <h1>+</h1>
          </div>
          <h4>Add Walk</h4>
        </div>
        </div>
      </div>
    );
  }
}

export default WalkSchedule;
