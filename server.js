import express from "express";

export function calculateCartTotal(subtotal, discountPercent) {
  if (discountPercent >= 100) {
    return 0;
  }

  const discountAmount = subtotal * discountPercent / 100;
  return subtotal - discountAmount;
}

export function createApp() {
  const app = express();
  app.use(express.json());

  app.post("/checkout", (request, response) => {
    const { subtotal, discount } = request.body;
    const total = calculateCartTotal(subtotal, discount);
    response.json({ total });
  });

  return app;
}

const app = createApp();
const port = process.env.PORT || 3000;

if (process.argv[1]?.endsWith("server.js")) {
  app.listen(port, () => {
    console.log(`Cart API listening on http://localhost:${port}`);
  });
}
