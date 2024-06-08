import React from "react";
import { AppProvider, useGlobalContext } from "./contex"; // Corrected typo in import path
import { Pie } from "react-chartjs-2";

// Define the MyPieChart component

const Admin = () => {
  const { data } = useGlobalContext(); // Ensure this hook returns the expected data structure

  const result = {};

  data.forEach((item) => {
    if (result[item.vote]) {
      result[item.vote] += 1; // Increment the count if the item already exists
    } else {
      result[item.vote] = 1; // Initialize the count to 1 if the item doesn't exist yet
    }
  });

  const labels = Object.keys(result);
  const values = Object.values(result);

  const totalVotes = values.reduce((a, b) => a + b);

  console.log(Object.entries(result));
  return (
    <>
      <h1 className='statistics-header' >Voting statistics</h1>

      <table>
        <tbody>
          <tr>
            <th>voting options </th> <th>number votes </th>
            <th>percentage </th>{" "}
          </tr>

          {Object.entries(result).map((item) => {
            return (
              <tr key={item[0]}>
                <td>{item[0]}</td> <td>{item[1]}</td>
                <td>{(item[1] / totalVotes).toFixed(2)}% </td>
              </tr>
            );
          })}

          <tr>
            <td>total</td>
            <td>{totalVotes} votes </td>{" "}  <td>100%</td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </>
  );
};

export default Admin;
