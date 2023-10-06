import React, { useState } from "react";
import { v4 } from "uuid";
import Table from "../components/Table";

const UserManagement = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      id: v4(),
      name: name,
      email: email,
      city: city,
    };
    setUsers([...users, user]);
    setName("");
    setEmail("");
    setCity("");
  };

  const loadUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setCity(user.city);
    setId(user.id);
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure want to delete..?")) {
      const index = users.findIndex((user) => {
        return user.id === id;
      });
      const copy = [...users];
      copy.splice(index, 1);
      setUsers(copy);
    }
  };

  const updateUser = (e) => {
    e.preventDefault();
    const user = {
      id,
      name,
      email,
      city,
    };
    const index = users.findIndex((user) => {
      return user.index === id;
    });
    const copy = [...users];
    copy.splice(index, 1, user);
    setUsers(copy);
    setName("");
    setEmail("");
    setCity("");
    setId(null);
  };

  const isDisabled = () => {
    return name === "" || email === "" || city === "";
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-7">
          <div className="card">
            <div className="card-header">
              <h4>
                User Data
                <i className="fa fa-user-o ms-1"></i>
              </h4>
            </div>
            <form onSubmit={(e) => (id === null ? addUser(e) : updateUser(e))}>
              <div className="card-body">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <select
                  className="form-control mt-2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" disabled="disabled">
                    Select City
                  </option>
                  <option value="MUMBAI">MUMBAI</option>
                  <option value="PUNE">PUNE</option>
                  <option value="SAMBHAJINAGAR">SAMBHAJINAGAR</option>
                </select>
                <button
                  className="btn btn-success form-control mt-2"
                  disabled={isDisabled()}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <Table users={users} loadUser={loadUser} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default UserManagement;
