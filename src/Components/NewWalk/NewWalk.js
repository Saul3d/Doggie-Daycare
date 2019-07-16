import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
import './NewWalk.scss';

class NewWalk extends React.Component {
  // constructor(props) {
  //   super(props);

  // this.toggle = this.toggle.bind(this);
  // this.state = {
  //   dropdownOpenDog: false,
  //   dropdownOpenStaff: false,
  // };
  // }

  // toggleDog = () => {
  //   this.setState(prevState => ({
  //     dropdownOpenDog: !prevState.dropdownOpenDog,
  //   }));
  // }

  // toggleStaff = () => {
  //   this.setState(prevState => ({
  //     dropdownOpenStaff: !prevState.dropdownOpenStaff,
  //   }));
  // }

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
                value={this.props.newWalk.date}
                onChange={this.props.dateChange} />
            </div>
            <div className="form-group">
              {/* <Dropdown isOpen={this.state.dropdownOpenStaff} toggle={this.toggleStaff}>
                <DropdownToggle caret>
                  Staff Name
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem value={this.props.newWalk.employeeId} onChange={this.props.employeeIdChange}>
                    {this.props.staffs.map(employee => (<option key={employee.id} value={employee.id}>{employee.name}</option>
                    ))}
                  </DropdownItem>
                </DropdownMenu>
                </Dropdown> */}
              <select value={this.props.newWalk.employeeId} onChange={this.props.employeeIdChange}>
              {/* eslint-disable-next-line max-len */}
              {this.props.staffs.map(employee => (<option key={employee.id} value={employee.id}>{employee.name}</option>
              ))}
              </select>
            </div>
            <div className="form-group">
            {/* <Dropdown isOpen={this.state.dropdownOpenDog} toggle={this.toggleDog}>
                <DropdownToggle caret>
                  Dog Name
                </DropdownToggle>
                <DropdownMenu>
              <DropdownItem value={this.props.newWalk.dogId} onChange={this.props.dogIdChange}>
              {this.props.dogs.map(dog => (<option key={dog.id} value={dog.id}>{dog.name}</option>
              ))}
              </DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            <select value={this.props.newWalk.dogId} onChange={this.props.dogIdChange}>
              {this.props.dogs.map(dog => (<option key={dog.id} value={dog.id}>{dog.name}</option>
              ))}
            </select>
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            {this.props.isEditing
              ? <Button color="primary" onClick={this.props.editFormSubmit}>Save Walk</Button>
              : <Button color="primary" onClick={this.props.formSubmit}>Create Walk</Button>}
            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewWalk;
