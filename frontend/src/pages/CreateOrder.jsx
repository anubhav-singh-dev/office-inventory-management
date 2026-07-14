import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function CreateOrder() {
  const navigate = useNavigate();

  const [creatorId, setCreatorId] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [items, setItems] = useState([
    {
      itemName: "",
      quantity: 1,
    },
  ]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        quantity: 1,
      },
    ]);
  };

  const createOrder = async (e) => {
    e.preventDefault();

    try {
      await api.post("/orders", {
        creatorId,
        expiryDate,
        items,
      });

      alert("Order Created Successfully");
      navigate("/orders");
    } catch (error) {
      alert("Failed to create order");
    }
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "30px auto",
      }}
    >
      <h2>Create Order</h2>

      <form onSubmit={createOrder}>
        <div style={{ marginBottom: "15px" }}>
          <label>Creator Id</label>
          <br />
          <input
            type="number"
            value={creatorId}
            onChange={(e) => setCreatorId(e.target.value)}
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Expiry Date</label>
          <br />
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <h3>Items</h3>

        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Item Name"
              value={item.itemName}
              onChange={(e) =>
                handleItemChange(index, "itemName", e.target.value)
              }
              required
              style={{
                width: "60%",
                padding: "10px",
                marginRight: "10px",
              }}
            />

            <input
              type="number"
              placeholder="Quantity"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", Number(e.target.value))
              }
              required
              style={{
                width: "120px",
                padding: "10px",
              }}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
          }}
        >
          Add Item
        </button>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
          }}
        >
          Create Order
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;