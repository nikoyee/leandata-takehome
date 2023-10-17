import { useState } from "react";
import UserModal from "../modals/UserModal";
import GenericTable from "./GenericTable";

const USERS_HEADER = [
  "Users ID",
  "First Name",
  "Last Name",
  "Total Amount of Expenses",
  "Action"
];

const TITLE = "User Management";

const UsersTable = ({ data, onAdd, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditUser(null);
  };
  const handleOnEditModal = (id) => {
    const user = data[id];

    setEditUser(user);
    setShowModal(true);
  };

  return (
    <>
      <GenericTable
        title={TITLE}
        header={USERS_HEADER}
        data={data}
        onBtnClick={handleOpenModal}
        onEdit={handleOnEditModal}
        onDelete={onDelete}
      />
      <UserModal
        isOpen={showModal}
        onHide={handleCloseModal}
        onAdd={onAdd}
        onEdit={onEdit}
        editUser={editUser}
      />
    </>
  );
};

export default UsersTable;
