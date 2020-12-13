import React from 'react';
import PropTypes from 'prop-types';
import data from "../../asset/asset.json";


const Test_component = () => (
  <React.Fragment>
    <h4>Simple Table</h4>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Address</th>
          <th>PINCODE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          const { id, lname, fname, dob, address, pincode } = row;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{dob}</td>
              <td>{address}</td>
              <td>{pincode}</td>
            </tr>)
        })}
      </tbody>
    </table>
  </React.Fragment>
);

export default Test_component;
