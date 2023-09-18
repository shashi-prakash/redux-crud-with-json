import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../redux/UserReducer";
export default function UpdateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const { id } = useParams(); // url se id milegi
  const existUser = users.filter((f) => f.id == id); // f.id userslist se aur url ki id se match karega aur response dega
  const { name, email } = existUser[0];
  const [updatedName, setName] = useState(name);
  const [updatedEmail, setEmail] = useState(email);
  const UpdateUserEvents = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updatedName,
        email: updatedEmail,
      })
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
                value={updatedName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={updatedEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn btn-primary text-center"
                onClick={UpdateUserEvents}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
