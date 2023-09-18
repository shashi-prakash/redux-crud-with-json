import React, { useState } from "react";
import { addUser } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const AddUserEvents = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name: name, email: email })
    );
    navigate("/");
  };

  return (
    <>
      <div className="d-flex w-100 justify-content-center align-item-center mt-5 pt-5">
        <div className="w-50 border p-5">
          <form>
            <div className="mb-2">
              <label htmlFor="">Name : </label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn btn-primary text-center"
                onClick={AddUserEvents}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
