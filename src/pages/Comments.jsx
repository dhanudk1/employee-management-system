import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);
  const params = useParams();

  const getComments = async (postId) => {
    const result = "https://jsonplaceholder.typicode.com/comments";

    const response =
      postId === undefined
        ? await axios.get(result)
        : await axios.get(`${result}?postId=${postId}`);
    setComments(response.data);
    setFilteredComments(response.data);
  };

  useEffect(() => {
    getComments(params.postId);
  }, [params]);

  useEffect(() => {
    const copy = comments.filter((comment) => {
      return comment.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredComments(copy);
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <div className="row mt-3 mb-3">
          <div className="input-group flex-nowrap w-25 ms-auto">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Comments.."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Postid</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map((comment) => {
                return (
                  <tr>
                    <td>{comment.postId}</td>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
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

export default Comments;
