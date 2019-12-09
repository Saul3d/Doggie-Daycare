import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import PropTypes from 'prop-types';
import NewWalk from '../NewWalk/NewWalk';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';
import walkData from '../../helpers/data/walkData';

import './WalkSchedule.scss';

const defaultWalk = {
  date: '',
  employeeId: '',
  dogId: '',
};

class WalkSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {
    showModal: false,
    newWalk: defaultWalk,
    isEditing: false,
  }

  editWalk = (walk) => {
    this.setState({ newWalk: walk, showModal: true, isEditing: true });
  };


  formFieldStringState = (name, e) => {
    const tempWalk = { ...this.state.newWalk };
    tempWalk[name] = e.target.value;
    this.setState({ newWalk: tempWalk });
  }

  dateChange = e => this.formFieldStringState('date', e);

  employeeIdChange = e => this.formFieldStringState('employeeId', e);

  dogIdChange = e => this.formFieldStringState('dogId', e);


  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newWalk };
    saveMe.uid = firebase.auth().currentUser.uid;
    console.error('things to save ', saveMe);
    walkData.postWalk(saveMe)
      .then(() => {
        this.closeModal();
        this.props.getMyData();
      })
      .catch(err => console.error('unable to save', err));
  }

  editFormSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newWalk };
    console.error('saul', saveMe);
    saveMe.uid = firebase.auth().currentUser.uid;
    console.error('things to save ', saveMe);
    walkData.editFormSubmit(saveMe)
      .then(() => {
        this.closeModal();
        this.props.getMyData();
      })
      .catch(err => console.error('unable to save', err));
  }

  static propTypes = {
    walkPenShape: PropTypes.arrayOf(walkShape.walkShape),
  }

  displayModal = () => {
    // console.error('this is working');
    this.setState({ newWalk: defaultWalk });
    this.toggleModal();
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  closeModal() {
    console.error(this);
    this.setState({ isEditing: false });
    this.toggleModal();
  }

  render() {
    const { dogs } = this.props;
    const { staffs } = this.props;
    const { walks } = this.props;
    const { deleteWalk } = this.props;
    const { newWalk } = this.state;
    const getMissingDogProps = dogId => dogs.find(d => dogId === d.id) || {};
    const getMissingStaffProps = employeeId => staffs.find(s => employeeId === s.id) || {};

    const makeWalkCardSchedule = walks.map(schedule => (
      <Walk
        key={schedule.id}
        walk={schedule}
        staff={getMissingStaffProps(schedule.employeeId)}
        dog={getMissingDogProps(schedule.dogId)}
        deleteWalk={deleteWalk}
        editWalk={this.editWalk}
      />

    ));

    return (
      <div className="walkCardSchedule-container d-flex flex-wrap">
        {makeWalkCardSchedule}
        <NewWalk
          walks={walks}
          staffs={staffs}
          dogs={dogs}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
          newWalk={newWalk}
          formFieldStringState={this.formFieldStringState}
          dogIdChange={this.dogIdChange}
          dateChange={this.dateChange}
          employeeIdChange={this.employeeIdChange}
          formSubmit={this.formSubmit}
          editFormSubmit={this.editFormSubmit}
          isEditing={this.state.isEditing}
        />
        <div className="addWalk col" onClick={this.displayModal}>
          <div className="card">
            <div className="plus-wrapper card-body">
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
