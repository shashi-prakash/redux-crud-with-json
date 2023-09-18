import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";
export default function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteUserHandle = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4">Crud app with redux toolkit</h2>
        <Link to="/create">
          <button className="btn btn-success my-3 me-auto ml-auto">
            Create +
          </button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <button className="btn btn-primary me-2">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUserHandle(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
