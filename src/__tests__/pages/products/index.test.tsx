import "@testing-library/jest-dom";

import { render, screen, within } from "@/__tests__/test-utils";

import App from "@/pages/products";

describe("Index Product Page", () => {
  beforeEach(async () => {
    render(<App />);
  });

  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      expect(within(form).getByLabelText("input-product-name")).toBeTruthy();
      expect(
        within(form).getByLabelText("input-product-category")
      ).toBeTruthy();
      expect(within(form).getByLabelText("input-product-image")).toBeTruthy();
      // expect(
      //   within(form).getByLabelText("input-product-freshness")
      // ).toBeTruthy();
      expect(
        within(form).getByLabelText("input-product-description")
      ).toBeTruthy();
      expect(within(form).getByLabelText("input-product-price")).toBeTruthy();
      expect(within(form).getByLabelText("btn-submit")).toBeTruthy();
    });

    it.skip("should render the table component", () => {
      // TODO: should render the table component
    });
  });

  describe("Action for Product", () => {
    it.skip("should show error message when some of input is missing value", () => {
      // TODO: should show error message when some of input is missing value
    });
    it.skip("should add new product", () => {
      // TODO: should add new product
    });
    it.skip("should edit product", () => {
      // TODO: should edit product
    });
    it.skip("should delete product", () => {
      // TODO: should delete product
    });
  });
});
