import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const response = await api.get("/orders");
      setOrders(response.data);
    } catch (error) {
      alert("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div style={{ width: "95%", margin: "30px auto" }}>
      <h2>Orders</h2>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginBottom: "20px", padding: "10px 20px" }}
      >
        Dashboard
      </button>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Creator</th>
            <th>Status</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.creatorName}</td>
              <td>{order.status}</td>
              <td>{order.expiryDate}</td>
              <td>
                <button
                  onClick={() => navigate(`/submit-order/${order.id}`)}
                >
                  Submit
                </button>

                <button
                  onClick={() => navigate(`/complete-order/${order.id}`)}
                  style={{ marginLeft: "10px" }}
                >
                  Complete
                </button>

                <button
                  onClick={() => navigate(`/reject-order/${order.id}`)}
                  style={{ marginLeft: "10px" }}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}

          {orders.length === 0 && (
            <tr>
              <td colSpan="5" align="center">
                No Orders Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;