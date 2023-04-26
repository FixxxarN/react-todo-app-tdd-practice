import { render, screen } from "@testing-library/react";
import HeaderTitle from "..";
import React from 'react';

describe('<HeaderTitle />', () => {
  it('should render a typography with the text Todos in capital letters', () => {
    render(<HeaderTitle />);
    expect(screen.getByText('TODOS')).toBeVisible();
  });
});