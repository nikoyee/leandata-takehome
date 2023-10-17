import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import GenericModal from "./GenericModal";

function ExpenseModal({
  isOpen,
  onHide,
  onAdd,
  editExpense,
  onEdit,
  users,
  category
}) {
  const [userIdSelected, setUserIdSelected] = useState();
  const [categorySelected, setCategorySelected] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {}, [editExpense]);

  const handleChangeUser = (e) => {
    e.preventDefault();

    setUserIdSelected(e.target.value);
  };

  const handleChangeCategory = (e) => {
    e.preventDefault();

    setCategorySelected(e.target.value);
  };

  const handleChangeDescription = (e) => {
    e.preventDefault();

    setDescription(e.target.value);
  };

  const handleChangeAmount = (e) => {
    e.preventDefault();

    setAmount(e.target.value);
  };

  const handleOnClose = () => {
    onHide();
  };
  const handleSaveExpense = () => {
    console.log({ userIdSelected, categorySelected, description, amount });
    onAdd(userIdSelected, categorySelected, description, amount);
  };

  return (
    <GenericModal
      isOpen={isOpen}
      title={editExpense ? "Edit Expense" : "Add Expense"}
      primaryText="Save"
      secondaryText="Close"
      onClose={handleOnClose}
      onSecondaryClick={handleOnClose}
      onPrimaryClick={handleSaveExpense}
    >
      <Form>
        <Form.Group key="user" className="mb-3">
          <Form.Label>Select a User</Form.Label>
          <Form.Select
            size="md"
            value={userIdSelected}
            onChange={handleChangeUser}
          >
            <option value="">Select a user</option>
            {Object.values(users).map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName} [ID: {user.id}]
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group key="category" className="mb-3">
          <Form.Label>Select a Category</Form.Label>
          <Form.Select
            size="md"
            value={categorySelected}
            onChange={handleChangeCategory}
          >
            <option value="">Select a category</option>
            {category.map((cat) => {
              return <option key={cat}>{cat}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group key="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={handleChangeDescription}
          />
        </Form.Group>
        <Form.Group key="amount" className="mb-3">
          <Form.Label>Amount (to the nearest dollar)</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              value={amount}
              onChange={handleChangeAmount}
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </GenericModal>
  );
}

export default ExpenseModal;
