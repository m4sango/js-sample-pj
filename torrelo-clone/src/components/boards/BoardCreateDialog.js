import React from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export default function BoardCreateDialog(props) {
  const { onClose, open, onCreate } = props;
  let inputValue = "";

  const handleOnChangesValue = (e) => {
    inputValue += e.target.value;
  };

  const handleOnCreate = (e) => {
    e.preventDefault();

    onCreate(inputValue);
    onClose();
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className="board-create-dialog-header">
        <DialogTitle id="新しいボードを作成">Set backup account</DialogTitle>
        <button type="button" className="dialog-close-btn">
          <span className="dialog-close-btn-icon">X</span>
        </button>
      </div>
      <form className="board-create-dialog-form">
        <input
          placeholder="ボードタイトルを追加"
          onChange={handleOnChangesValue}
        ></input>
        <button type="submit" onClick={handleOnCreate}>
          <span>ボードを作成</span>
        </button>
      </form>
    </Dialog>
  );
}
