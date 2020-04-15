import React, { useState } from "react";
import "./ListCreate.css";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "30vh",
    minHeight: "30vh",
    width: "30vw",
    minWidth: "30vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  areaAdd: {
    height: "100%",
    width: "100%",
  },
  contentAdd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  addText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  contentWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ListCreate(props) {
  const classes = useStyles();
  const [listTitle, setListTitle] = useState("");
  const [openInput, setOpenInput] = useState(false);

  const handleListNameInputChanges = (e) => {
    setListTitle(e.target.value);
  };

  const handleOpenListCreate = () => {
    setOpenInput(true);
  };

  const handleCloseListCreate = () => {
    setOpenInput(false);
  };

  const handleOnClickAddList = (e) => {
    e.preventDefault();

    if (!listTitle) {
      return;
    }

    props.onClickAddList(listTitle);
    setOpenInput(false);
    resetInputField();
  };

  const resetInputField = () => {
    setListTitle("");
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.areaAdd}
        onClick={handleOpenListCreate}
        style={{ visibility: openInput ? "hidden" : "visible" }}
      >
        <CardContent className={classes.contentAdd}>
          <Typography className={classes.addText}>リストを追加</Typography>
        </CardContent>
      </CardActionArea>
      <div
        className={classes.contentWrapper}
        style={{ visibility: openInput ? "visible" : "hidden" }}
      >
        <CardContent className={classes.content}>
          <TextField
            id="outlined-basic"
            label=""
            value={listTitle}
            variant="outlined"
            placeholder="リストのタイトルを入力..."
            onChange={handleListNameInputChanges}
          ></TextField>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOnClickAddList}>
            リストを追加
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={handleCloseListCreate}
          >
            キャンセル
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
