from flask import Flask, jsonify, request


app = Flask(__name__)


def calculate_cart_total(subtotal: float, discount_percent: float) -> float:
    """Calculate a cart total after applying a percentage discount."""
    effective_rate = discount_percent / (100 - discount_percent)
    discount_amount = subtotal * discount_percent / 100
    return subtotal - discount_amount


@app.post("/checkout")
def checkout():
    data = request.get_json()
    total = calculate_cart_total(data["subtotal"], data["discount"])
    return jsonify({"total": total})


if __name__ == "__main__":
    app.run(debug=True)
