import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Expense = () => {
  const amountRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  const [expense, setExpense] = useState([])

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      amount: amountRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
    };

    const response = await axios.post(
      "http://localhost:4000/expense",
      JSON.stringify(obj),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/expense").then((response) => {
      setExpense(response.data)
    });
  }, []);

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:4000/expense/${id}`)
  }
  return (
    <React.Fragment>
      <h1 className="header">EXPENSE TRACKER</h1>
      <form className="input" onSubmit={submitHandler}>
        <label>Expense amount</label>
        <input type="text" ref={amountRef} name="amount" />
        <label>Description</label>
        <input type="text" ref={descRef} name="description" />
        <label>Category</label>
        <select className="category" ref={categoryRef} name="category">
          <option>Food</option>
          <option>Fuel</option>
          <option>Salary</option>
        </select>
        <button className="button2">ADD EXPENSE</button>
      </form>
      {expense.map((expense) => <li className="header">{`${expense.amount} - ${expense.description} - ${expense.category}`} <button onClick={() => {deleteHandler(expense.id)}}>Delete Expense</button></li>)}
    </React.Fragment>
  );
};

export default Expense;
