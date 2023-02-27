import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      render(<Button text={""} />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
