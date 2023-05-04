import * as React from "react";
import { styled, StyledEngineProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AboutUs from "../../AboutUs/AboutUs";
import BootstrapDialogTitle from "./bootstrapDialogTitleAboutUs/BootstrapDialogTitleAboutUs";
import styles from "./AboutUsModal.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InfosModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div>
        <button
          className={styles.aboutUsLink}
          type="button"
          onClick={handleClickOpen}
        >
          About us
        </button>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            "& .MuiPaper-root": {
              color: "whitesmoke",
              fontFamily: "Poppins",
              fontWeight: "500,",
              maxWidth: "75%",
              backgroundColor: "black",
              display: "flex",
            },
            "& .MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.850)",
            },
          }}
        >
          <BootstrapDialogTitle
            className={styles.aboutUsContainer}
            id="customized-dialog-title"
            onClose={handleClose}
          >
            About Us
          </BootstrapDialogTitle>
          <div className={styles.divider} />
          <DialogContent className={styles.dialogContent}>
            <AboutUs />
          </DialogContent>
        </BootstrapDialog>
      </div>
    </StyledEngineProvider>
  );
}
