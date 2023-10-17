import { useState } from "react";
import GenericTable from "./GenericTable";
import ExpenseModal from "../modals/ExpenseModal";
import { CATEGORY } from "../../App";

const EXPENSES_HEADER = [
  "Expense ID",
  "User",
  "Category",
  "Description",
  "Amount",
  "Action"
];

const TITLE = "Expense Management";

const ExpenseTable = ({ data, users, onAdd, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [editExpense, setEditExpense] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditExpense(null);
  };
  const handleOnEditModal = (id) => {
    const expense = data[id];

    setEditUser(expense);
    setShowModal(true);
  };

  return (
    <>
      <GenericTable
        title={TITLE}
        header={EXPENSES_HEADER}
        data={data}
        onBtnClick={handleOpenModal}
        onEdit={handleOnEditModal}
        onDelete={onDelete}
      />
      <ExpenseModal
        isOpen={showModal}
        onHide={handleCloseModal}
        onAdd={onAdd}
        onEdit={onEdit}
        editExpense={editExpense}
        users={users}
        category={CATEGORY}
      />
    </>
  );
};

export default ExpenseTable;
