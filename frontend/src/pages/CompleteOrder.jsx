import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

function CompleteOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transactionReference, setTransactionReference] = useState("");

  const completeOrder = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/orders/${id}/complete`, {
        transactionReference,
      });

      alert("Order Completed Successfully");
      navigate("/orders");
    } catch (error) {
      alert("Failed to complete order");
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
      }}
    >
      <h2>Complete Order</h2>

      <form onSubmit={completeOrder}>
        <div style={{ marginBottom: "20px" }}>
          <label>Transaction Reference</label>
          <br />
          <input
            type="text"
            value={transactionReference}
            onChange={(e) => setTransactionReference(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginRight: "10px",
          }}
        >
          Complete
        </button>

        <button
          type="button"
          onClick={() => navigate("/orders")}
          style={{
            padding: "10px 20px",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CompleteOrder;