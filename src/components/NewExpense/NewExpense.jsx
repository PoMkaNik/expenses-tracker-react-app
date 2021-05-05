import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editingStateHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    editingStateHandler();
  };

  let content = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={editingStateHandler}
    />
  ) : (
    <button onClick={editingStateHandler}>Add New Expense</button>
  );

  return <div className='new-expense'>{content}</div>;
};

export default NewExpense;
