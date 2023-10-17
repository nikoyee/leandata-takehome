import { useState } from "react";
import "./styles.css";
import User from "./utils/user";
import Expense from "./utils/expense";
import UsersTable from "./components/tables/UsersTable";
import ExpenseTable from "./components/tables/ExpensesTable";

export const CATEGORY = ["Food", "Activity", "Office Equipment"];
const CATEGORY_HEADER = ["Category", "Total Amount of Expenses"];

// modal content
export const ADD_USER = "add_user";
export const EDIT_USER = "edit_user";
export const ADD_EXPENSE = "add_expense";
export const EDIT_EXPENSE = "edit_expense";

export default function App() {
  const [users, setUsers] = useState({});
  const [expenses, setExpenses] = useState({});
  const [summary, setSummary] = useState({
    Food: 0,
    Activity: 0,
    "Office Equipment": 0
  });

  const handleAddUser = (firstName, lastName) => {
    const newUser = new User(firstName, lastName);
    setUsers((prev) => {
      const prevUsers = { ...prev };
      prevUsers[newUser.id] = newUser;

      return prevUsers;
    });
  };

  const handleEditUser = (id, updatedUser) => {
    setUsers((prev) => {
      const prevUsers = { ...prev };
      prevUsers[id] = updatedUser;

      return prevUsers;
    });
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => {
      const prevUsers = { ...prev };
      delete prevUsers[id];

      return prevUsers;
    });

    let updatedExpenses = {};

    for (const expense of Object.values(expenses)) {
      if (expense.userId !== id) {
        updatedExpenses[expense.id] = expense;
      }
    }

    setExpenses(updatedExpenses);
  };

  const handleAddExpense = (userId, category, description, amount) => {
    const newExpense = new Expense(userId, category, description, amount);
    setExpenses((prev) => {
      const prevExpenses = { ...prev };
      prevExpenses[newExpense.id] = newExpense;

      return prevExpenses;
    });

    const newTotalAmount = Number(users[userId].totalAmount) + Number(amount);

    setUsers((prev) => {
      const prevUsers = { ...prev };
      prevUsers[userId].totalAmount = newTotalAmount;

      return prevUsers;
    });
  };

  const handleEditExpense = (id, updatedExpense) => {
    setExpenses((prev) => {
      const prevExpenses = { ...prev };
      prevUsers[id] = updatedExpense;

      return prevUsers;
    });

    const newTotalAmount =
      Number(users[updatedExpense.userId].totalAmount) + Number(amount);

    setUsers((prev) => {
      const prevUsers = { ...prev };
      prevUsers[updatedExpense.userId].totalAmount = newTotalAmount;

      return prevUsers;
    });
  };

  return (
    <div className="App">
      <h1>LeanData Takehome</h1>
      <UsersTable
        data={users}
        onAdd={handleAddUser}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      <ExpenseTable
        data={expenses}
        users={users}
        onAdd={handleAddExpense}
        onEdit={handleEditExpense}
        onDelete={() => {}}
      />
      {/* <Table
        title="Summary of Expenses"
        header={CATEGORY_HEADER}
        hideBtn={true}
      /> */}
    </div>
  );
}
