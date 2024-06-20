import { Alert, AlertProps, Snackbar as BaseSnackbar } from "@mui/material";

type SnackbarProps = {
  isOpen: boolean;
  variant: AlertProps["severity"];
  message: string;
  onClose: () => void;
};

export const Snackbar: React.FC<SnackbarProps> = ({
  isOpen,
  onClose,
  variant,
  message,
}) => {
  return (
    <BaseSnackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={variant}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </BaseSnackbar>
  );
};
