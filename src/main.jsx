import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [subtotal, setSubtotal] = useState("100");
  const [discount, setDiscount] = useState("20");
  const [total, setTotal] = useState(null);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setTotal(null);

    try {
      const response = await fetch("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subtotal: Number(subtotal),
          discount: Number(discount),
        }),
      });

      if (!response.ok) {
        throw new Error("Checkout request failed.");
      }

      const result = await response.json();
      setTotal(result.total);
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">SHOPPING CART</p>
        <h1>Calculate your total</h1>
        <p className="intro">
          Enter your subtotal and discount to preview the checkout total.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Subtotal
            <div className="input-wrap">
              <span>$</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={subtotal}
                onChange={(event) => setSubtotal(event.target.value)}
                required
              />
            </div>
          </label>

          <label>
            Discount
            <div className="input-wrap">
              <input
                type="number"
                step="0.01"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
                required
              />
              <span>%</span>
            </div>
          </label>

          <button type="submit">Calculate total</button>
        </form>

        {total !== null && (
          <div className="result" aria-live="polite">
            <span>Total</span>
            <strong>${Number(total).toFixed(2)}</strong>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
