import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import GenericModal from "./GenericModal";

function UserModal({ isOpen, onHide, onAdd, editUser, onEdit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (editUser) {
      setFirstName(editUser.firstName);
      setLastName(editUser.lastName);
    }
  }, [editUser]);

  const handleChangeFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const resetState = () => {
    setFirstName("");
    setLastName("");
  };

  const handleSaveUser = () => {
    if (editUser) {
      const updatedUser = editUser;
      updatedUser.firstName = firstName;
      updatedUser.lastName = lastName;

      onEdit(editUser.id, updatedUser);
    } else {
      onAdd(firstName, lastName);
    }
    resetState();
    onHide();
  };

  const handleOnClose = () => {
    resetState();
    onHide();
  };

  return (
    <GenericModal
      isOpen={isOpen}
      title={editUser ? "Edit User" : "Add User"}
      primaryText="Save"
      secondaryText="Close"
      onClose={handleOnClose}
      onSecondaryClick={handleOnClose}
      onPrimaryClick={handleSaveUser}
    >
      <Form>
        <Form.Group key="fname" className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </Form.Group>
        <Form.Group key="lname" className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
          />
        </Form.Group>
      </Form>
    </GenericModal>
  );
}

export default UserModal;
