import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const params = useParams();

  const getPhotos = async (albumId) => {
    const result = "https://jsonplaceholder.typicode.com/photos";

    const response =
      albumId === undefined
        ? await axios.get(result)
        : await axios.get(`${result}?albumId=${albumId}`);
    setPhotos(response.data);
    setFilteredPhotos(response.data);
  };

  useEffect(() => {
    getPhotos(params.albumId);
  }, [params]);

  useEffect(() => {
    const res = photos.filter((photo) => {
      return photo.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredPhotos(res);
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
              placeholder="Search Photos.."
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
                <th>Albumid</th>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {filteredPhotos.map((photo) => {
                return (
                  <tr>
                    <td>{photo.albumId}</td>
                    <td>{photo.id}</td>
                    <td>{photo.title}</td>
                    <td>{photo.thumbnailUdl}</td>
                    <td>
                      <img src={photo.url} alt="#" height="50" width="50" />
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

export default Photos;
