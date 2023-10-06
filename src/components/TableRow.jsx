import React from "react";

const TableRow = (props) => {
  const { user, loadUser, deleteUser } = props;

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.city}</td>
      <td>
        <button
          className="btn btn-danger me-2"
          onClick={() => deleteUser(user.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          className="btn btn-primary mt-md-0 mt-2"
          onClick={() => loadUser(user)}
        >
          <i className="fa fa-pencil"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
