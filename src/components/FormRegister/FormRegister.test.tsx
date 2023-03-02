import { render, screen } from "@testing-library/react";
import FormRegister from "./FormRegister";

describe("Given a FormRegister component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with the text 'Introduce your password'", () => {
      const labelText = "Introduce your password";

      render(<FormRegister />);

      const expectedLabel = screen.getByPlaceholderText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<FormRegister />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
