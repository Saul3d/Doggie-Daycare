import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class NewWalk extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create Walk</ModalHeader>
          <ModalBody>
          <form>
            <div class="form-group">
              <label for="exampleDateInput">Date</label>
              <input class="form-control" id="exampleDateInput" rows="3"></input>
            </div>
            <div class="form-group">
              <label for="exampleStaffNameInput">Staff Name</label>
              <input class="form-control" id="exampleStaffNameInput" rows="3"></input>
            </div>
            <div class="form-group">
              <label for="exampleDogNameInput">Dog Name</label>
              <input class="form-control" id="exampleDogNameInput" rows="3"></input>
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewWalk;
