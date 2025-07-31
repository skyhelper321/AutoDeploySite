import { greet } from "../src/index";

describe('greet', () => {
  it('should return greeting message', () => {
    expect(greet("W")).toBe("Hello, W!");
  });
});
