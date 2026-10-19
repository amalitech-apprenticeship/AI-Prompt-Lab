import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartTotal } from "../server.js";

test("standard discount", () => {
  assert.equal(calculateCartTotal(100, 20), 80);
});

test("100% discount results in zero", () => {
  assert.equal(calculateCartTotal(100, 100), 0);
});

test("discounts over 100% are capped at zero", () => {
  assert.equal(calculateCartTotal(100, 120), 0);
});

test("discount edge cases never produce invalid totals", () => {
  assert.equal(calculateCartTotal(100, 100), 0);
  assert.equal(calculateCartTotal(100, 120), 0);
});
