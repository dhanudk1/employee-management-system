import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const params = useParams();

  const getTodos = async (userId) => {
    const result = "https://jsonplaceholder.typicode.com/todos";
    const response =
      userId === undefined
        ? await axios.get(result)
        : await axios.get(`${result}?userId=${userId}`);
    setTodos(response.data);
    setFilteredTodos(response.data);
  };

  useEffect(() => {
    getTodos(params.userId);
  }, [params]);

  useEffect(() => {
    const res = todos.filter((todo) => {
      return todo.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredTodos(res);
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <div className="row mt-3 mb-3">
          <div class="input-group flex-nowrap w-25 ms-auto">
            <span class="input-group-text" id="addon-wrapping">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search Todos.."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Userid</th>
                <th>Id</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todo) => {
                const str = todo.completed.toString();
                return (
                  <tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                      <p>{str === "true" ? "Completed" : "Incompleted"}</p>
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

export default Todos;
