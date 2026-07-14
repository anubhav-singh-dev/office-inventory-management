import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const username = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1>Office Inventory Management System</h1>

      <h3>Welcome, {username}</h3>

      <h4>Role : {role}</h4>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{ padding: "12px 20px", cursor: "pointer" }}
          onClick={() => navigate("/orders")}
        >
          View Orders
        </button>

        <button
          style={{ padding: "12px 20px", cursor: "pointer" }}
          onClick={() => navigate("/create-order")}
        >
          Create Order
        </button>

        <button
          style={{ padding: "12px 20px", cursor: "pointer" }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;