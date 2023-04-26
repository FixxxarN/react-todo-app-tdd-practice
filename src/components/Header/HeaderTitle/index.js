import { Typography } from '@mui/material';
import React from 'react';

const HeaderTitle = () => {
  const headerTitle = "Todos";
  const headerTitleCapitalLetter = headerTitle.toUpperCase();

  return <Typography data-testid="header-title" variant='h5'>{headerTitleCapitalLetter}</Typography>
};

export default HeaderTitle;