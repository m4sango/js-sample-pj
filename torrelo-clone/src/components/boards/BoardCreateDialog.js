import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
  makeStyles,
  Button,
  TextField,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },
  closeBtn: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    margin: "0",
  },
  title: {
    fontSize: "2px",
  },
  content: {},
});

export default function BoardCreateDialog(props) {
  const classes = useStyles();

  const { onClose, open, onCreate } = props;
  const [disabled, setDisabled] = useState(true);
  let inputValue = "";

  const handleOnChangesValue = (e) => {
    inputValue = e.target.value;

    setDisabled(!inputValue);
  };

  const handleOnCreate = (e) => {
    e.preventDefault();

    onCreate(inputValue);
    onClose();
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.header}>
        <DialogTitle id="form-dialog-title" className={classes.title}>
          新しいボードを作成
        </DialogTitle>
        <Button className={classes.closeBtn}>
          <CloseIcon></CloseIcon>
        </Button>
      </div>
      <DialogContent className={classes.content}>
        <TextField
          className={classes.formTextField}
          required
          label="required"
          placeholder="ボードタイトルを追加"
          InputLabelProps={{
            shrink: true,
          }}
          autoFocus
          fullWidth
          onChange={handleOnChangesValue}
        />
        <DialogActions>
          <Button onClick={handleOnCreate} color="primary" disabled={disabled}>
            ボードを作成
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
