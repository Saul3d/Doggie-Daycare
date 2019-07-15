import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class NewWalk extends React.Component {
// onTodoChange = (value) => {
//   this.setState({ name: value });
// };
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Schedule A Walk</ModalHeader>
          <ModalBody>
          <form onSubmit={this.props.formSubmit}>
            <div className="form-group">
              <label htmlFor="exampleDateInput">Date</label>
              <input
                className="form-control"
                id="exampleDateInput"
                rows="3"
                // value={this.props.date}
                onChange={this.props.dateChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleStaffNameInput">Staff Name</label>
              <input
                className="form-control"
                id="exampleStaffNameInput"
                rows="3"
                // value={this.props.staff}
                onChange={this.props.staffChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleDogNameInput">Dog Name</label>
              <input
                className="form-control"
                id="exampleDogNameInput"
                rows="3"
                // value={this.props.name}
                onChange={this.props.nameChange}/>
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Create Walk</Button>
            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewWalk;
