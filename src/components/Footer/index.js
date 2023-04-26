import React, { useState } from 'react';
import FooterButton from './FooterButton';
import { TextField } from '@mui/material';

const Footer = ({ addNewTodoCallback }) => {
  const [addStateActive, setAddStateActive] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  if (addStateActive) {
    return (
      <div data-testid="footer">
        <TextField data-testid="add-new-todo-textfield" value={newTodoText} onChange={(event) => setNewTodoText(event.target.value)} />
        <FooterButton text="Cancel" onClickCallback={() => setAddStateActive(false)} />
        <FooterButton text="Save" onClickCallback={() => {
          addNewTodoCallback({ text: newTodoText });
          setAddStateActive(false);
        }} />
      </div>
    )
  }

  return <div data-testid="footer"><FooterButton text="Add new todo" onClickCallback={() => setAddStateActive(true)} /></div>
};

export default Footer;