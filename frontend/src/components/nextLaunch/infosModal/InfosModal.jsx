import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import styles from "./InfosModal.module.css";
import BootstrapDialogTitle from "./bootstrapDialogTitle/BootstrapDialogTitle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InfosModal({ missionName, missionDescription }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className={styles.moreInfosLink}
        type="button"
        onClick={handleClickOpen}
      >
        &#40;More info&#41;
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialogTitle-root": {
            color: "black",
            fontFamily: "Poppins",
            fontWeight: "500,",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {missionName}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{missionDescription}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

InfosModal.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};
