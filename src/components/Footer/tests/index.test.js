/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Footer from "..";
import React from "react";
import userEvent from '@testing-library/user-event';

describe('<Footer />', () => {
  let props;

  beforeEach(() => {
    props = {
      addNewTodoCallback: jest.fn()
    }
  });

  it('should render add new todo footer button on initial', () => {
    render(<Footer {...props} />);
    expect(screen.getByTestId('footer-button-"Add new todo"')).toBeVisible();
  });

  it('should render a cancel button and a save button when add state is active', async () => {
    const user = userEvent.setup();
    render(<Footer {...props} />);

    const addNewTodoButton = screen.getByTestId('footer-button-"Add new todo"');
    user.click(addNewTodoButton);

    await waitFor(() => {
      expect(screen.getByTestId('footer-button-"Cancel"')).toBeVisible();
      expect(screen.getByTestId('footer-button-"Save"')).toBeVisible();
    })
  });

  it('should render add new todo after clicking on cancel or save', async () => {
    const user = userEvent.setup();
    render(<Footer {...props} />);

    user.click(screen.getByTestId('footer-button-"Add new todo"'));

    await waitFor(() => {
      user.click(screen.getByTestId('footer-button-"Cancel"'));
    })

    await waitFor(() => expect(screen.getByTestId('footer-button-"Add new todo"')).toBeVisible());

    user.click(screen.getByTestId('footer-button-"Add new todo"'));

    await waitFor(() => expect(screen.getByTestId('footer-button-"Save"')).toBeVisible());

    user.click(screen.getByTestId('footer-button-"Save"'));

    await waitFor(() => expect(screen.getByTestId('footer-button-"Add new todo"')).toBeVisible());
  });

  it('should render a textfield for todo when clicking on add new todo button', async () => {
    const user = userEvent.setup();
    render(<Footer {...props} />);

    const addNewTodoButton = screen.getByTestId('footer-button-"Add new todo"');

    user.click(addNewTodoButton);

    await waitFor(() => {
      expect(screen.getByTestId('add-new-todo-textfield')).toBeVisible();
    })
  });

  it('should call addNewTodoCallback on save button click with text from textfield', async () => {
    jest.resetAllMocks();
    const user = userEvent.setup();

    render(<Footer {...props} />);

    const addNewTodoButton = screen.getByTestId('footer-button-"Add new todo"');

    user.click(addNewTodoButton);

    await waitFor(() => {
      expect(screen.getByTestId('add-new-todo-textfield')).toBeVisible();
    })

    fireEvent.change(screen.getByTestId('add-new-todo-textfield').querySelector('input'), { target: { value: 'Finish this todo' } });

    await waitFor(() => user.click(screen.getByTestId('footer-button-"Save"')));

    await waitFor(() => expect(props.addNewTodoCallback).toHaveBeenCalledWith({ text: 'Finish this todo' }));
  });
});