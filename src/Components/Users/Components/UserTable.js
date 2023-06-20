import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedData } from '../../../slices/UserSlice';
import './UserTable.css';

export const UserTable = () => {
  const selectedData = useSelector(getSelectedData);

  return (
    <table className="my-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {selectedData.map((dataItem) => (
          <tr key={dataItem.email}>
            <td>{dataItem.name}</td>
            <td>{dataItem.email}</td>
            <td>{dataItem.age}</td>
            <td>{dataItem.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
