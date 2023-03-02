import { render, screen } from "@testing-library/react";
import FormRegister from "./FormRegister";

describe("Given a FormRegister component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with the text 'Introduce your password'", () => {
      const placeHolderText = "Introduce your password";

      render(<FormRegister />);

      const expectedLabel = screen.getByPlaceholderText(placeHolderText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<FormRegister />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show an input with the text 'Introduce your email'", () => {
      const placeHolderText = "Introduce your email";

      render(<FormRegister />);

      const expectedLabel = screen.getByPlaceholderText(placeHolderText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show an input with the text 'Introduce an image'", () => {
      const placeHolderText = "Introduce an image";

      render(<FormRegister />);

      const expectedLabel = screen.getByPlaceholderText(placeHolderText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Email'", () => {
      const labeltext = "Email";

      render(<FormRegister />);

      const expectedLabel = screen.getByLabelText(labeltext);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
