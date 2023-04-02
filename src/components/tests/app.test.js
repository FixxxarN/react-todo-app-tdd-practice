import { render } from "@testing-library/react";
import App from "../app";
import React from "react";

describe('<App />', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});