import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getAlbums = async (userId) => {
    const result = "https://jsonplaceholder.typicode.com/albums";
    const response =
      userId !== undefined
        ? await axios.get(`${result}?userId=${userId}`)
        : await axios.get(result);
    setAlbums(response.data);
    setFilteredAlbums(response.data);
  };

  useEffect(() => {
    getAlbums(params.userId);
  }, [params]);

  useEffect(() => {
    const copy = albums.filter((album) => {
      return album.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredAlbums(copy);
    // eslint-disable-next-line
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
              placeholder="Search Albums.."
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
              </tr>
            </thead>
            <tbody>
              {filteredAlbums.map((album) => {
                return (
                  <tr>
                    <td>{album.userId}</td>
                    <td>{album.id}</td>
                    <td>{album.title}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => navigate(`/photo/${album.id}`)}
                      >
                        PHOTOS
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

export default Albums;
