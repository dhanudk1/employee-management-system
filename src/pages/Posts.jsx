import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setFilteredPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const res = posts.filter((post) => {
      return post.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredPosts(res);
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
              placeholder="Search Posts.."
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
                <th>Userid</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => {
                return (
                  <tr>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => navigate(`/comment/${post.id}`)}
                      >
                        COMMENTS
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

export default Posts;
