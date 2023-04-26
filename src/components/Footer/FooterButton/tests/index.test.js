import { render, screen, waitFor } from "@testing-library/react";
import FooterButton from "..";
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('<FooterButton />', () => {
  it('should render a button with a text from props', () => {
    render(<FooterButton text="Add new todo" />);
    expect(screen.getByTestId('footer-button-"Add new todo"')).toBeVisible();
  });

  it('should call onClickCallback on button onClick', async () => {
    const mockedOnClickCallback = jest.fn();
    const user = userEvent.setup();

    render(<FooterButton text="Add new todo" onClickCallback={mockedOnClickCallback} />);

    const footerButton = screen.getByTestId('footer-button-"Add new todo"');

    user.click(footerButton);

    await waitFor(() => expect(mockedOnClickCallback).toHaveBeenCalledTimes(1));
  });
});