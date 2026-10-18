from cart import calculate_cart_total


def test_standard_discount():
    assert calculate_cart_total(100.0, 20.0) == 80.0
