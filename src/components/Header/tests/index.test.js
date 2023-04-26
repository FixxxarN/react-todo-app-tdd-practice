import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from "..";

describe('<Header />', () => {
  it('should render header title', () => {
    render(<Header />);
    expect(screen.getByTestId('header-title')).toBeVisible();
  });
});