import { Alert } from "@mui/material";
import React from "react";

interface Props {
  errorMessage: string;
}

export const ErrorAlert: React.FC<Props> = ({ errorMessage }) => {
  return (
    <Alert variant="filled" severity="error">
      {errorMessage}
    </Alert>
  );
};
