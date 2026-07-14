import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

function SubmitOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const submitOrder = async () => {
    try {
      await api.put(`/orders/${id}/submit`);

      alert("Order Submitted Successfully");
      navigate("/orders");
    } catch (error) {
      alert("Failed to submit order");
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        textAlign: "center",
      }}
    >
      <h2>Submit Order</h2>

      <p>Are you sure you want to submit this order?</p>

      <button
        onClick={submitOrder}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
        }}
      >
        Submit
      </button>

      <button
        onClick={() => navigate("/orders")}
        style={{
          padding: "10px 20px",
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default SubmitOrder;