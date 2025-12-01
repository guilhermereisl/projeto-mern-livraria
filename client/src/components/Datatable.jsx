import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles.css";
import API from "../API";

const DataTable = (props) => {
  let books = props.books;
  const navi = useNavigate();

  const onDeleteClick = (id) => {
    API
    .delete(`/api/books/${id}`)
      .then((res) => {
        navi("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  return (
    <table className="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Isbn</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.author}</td>
              <td>
                <Link to={`/show-book/${book._id}`}>
                  <button type="button" className="btn-show-book btn">
                    Show
                  </button>
                </Link>

                <Link to={`/edit-book/${book._id}`}>
                  <button type="button" className="btn-edit-book btn">
                    Edit
                  </button>
                </Link>

                <button
                  className="btn-delete-book btn"
                  onClick={() => onDeleteClick(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
