import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  const { users, loadUser, deleteUser } = props;

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow
                user={user}
                loadUser={loadUser}
                deleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
