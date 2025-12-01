import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//import "./styles.css";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
    const handleError = (err) =>
    setTimeout(() => {
      toast.error(err, {
        position: "bottom-left",
      });
    }, 1000);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/show-book" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />

          <Route
            element={
              <ProtectedRoute
                handleError={handleError}
                allowedRoles={["admin","manager", "user"]}
              />
            }
          >
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
            
          </Route>

          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
