import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
    setFilteredUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const copy = users.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredUsers(copy);
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <div className="row mt-3 mb-3">
          <div className="input-group w-25 ms-auto">
            <span className="input-group-text ">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Users.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                    <td>
                      <button
                        className="btn btn-success me-2 mt-2"
                        onClick={() => navigate(`/post/${user.id}`)}
                      >
                        POSTS
                      </button>
                      <button
                        className="btn btn-dark me-2 mt-2"
                        onClick={() => navigate(`/album/${user.id}`)}
                      >
                        ALBUM
                      </button>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => navigate(`/todo/${user.id}`)}
                      >
                        TODO
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
