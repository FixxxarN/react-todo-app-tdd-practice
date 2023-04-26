import { Button } from "@mui/material";
import React from "react";

const FooterButton = ({ text, onClickCallback }) => {
  return <Button data-testid={`footer-button-"${text}"`} variant="contained" onClick={onClickCallback}>{text}</Button>
}

export default FooterButton;