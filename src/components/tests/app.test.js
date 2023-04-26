import { render, screen } from "@testing-library/react";
import App from "../app";
import React from "react";

describe('<App />', () => {
  it('should render without crashing', () => {
    render(<App />);
  });

  it('should render a header', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeVisible();
  });

  it('should render a body', () => {
    render(<App />);
    expect(screen.getByTestId('body')).toBeVisible();
  });

  it('should render a footer', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeVisible();
  });
});