import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartTotal } from "../server.js";

test("standard discount", () => {
  assert.equal(calculateCartTotal(100, 20), 80);
});

test("100% discount retains the intentional division bug", () => {
  assert.throws(
    () => calculateCartTotal(100, 100),
    /ZeroDivisionError: division by zero/,
  );
});

test("discounts over 100% produce a negative total", () => {
  assert.equal(calculateCartTotal(100, 120), -20);
});
