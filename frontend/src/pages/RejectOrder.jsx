import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

function RejectOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rejectionReason, setRejectionReason] = useState("");

  const rejectOrder = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/orders/${id}/reject`, {
        rejectionReason,
      });

      alert("Order Rejected Successfully");
      navigate("/orders");
    } catch (error) {
      alert("Failed to reject order");
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
      }}
    >
      <h2>Reject Order</h2>

      <form onSubmit={rejectOrder}>
        <div style={{ marginBottom: "20px" }}>
          <label>Rejection Reason</label>
          <br />
          <textarea
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            placeholder="Enter Rejection Reason"
            rows="5"
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
          Reject
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

export default RejectOrder;