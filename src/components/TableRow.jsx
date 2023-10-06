import React from "react";

const TableRow = (props) => {
  const { user, loadUser, deleteUser } = props;

  return (
    <div className="table-responsive">
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.city}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteUser(user.id)}
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => loadUser(user)}
          >
            <i className="fa fa-pencil"></i>
          </button>
        </td>
      </tr>
    </div>
  );
};

export default TableRow;
