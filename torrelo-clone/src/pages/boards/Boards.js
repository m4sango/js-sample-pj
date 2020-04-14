import React, { useState } from "react";
import "./Boards.css";
import BoardCreateDialog from "../../components/boards/BoardCreateDialog";
import uuid from "react-uuid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  boardList: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardCommon: {
    display: "flex",
    width: "20vw",
    minWidth: "150px",
    height: "10vh",
    minHeight: "100px",
    backgroundColor: "lightblue",
  },
  cardRoot: {
    margin: "8px",
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    alignItems: "center",
    color: "white",
  },
});

export default function Boards() {
  const classes = useStyles();

  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOnCreate = (title) => {
    const list = boards.slice();
    list.push({ title: title, id: uuid() });

    setBoards(list);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleOnClickCreateBoard = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.boardList}>
        {boards.map((board, index) => (
          <Board key={`${index}-${board.title}`} board={board}></Board>
        ))}
        <Card className={`${classes.cardCommon} ${classes.cardRoot}`}>
          <CardActionArea
            className={classes.cardCommon}
            onClick={handleOnClickCreateBoard}
          >
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                新しいボードを作成
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <BoardCreateDialog
        open={open}
        onClose={handleDialogClose}
        onCreate={handleOnCreate}
      />
    </div>
  );
}

const Board = (props) => {
  const classes = useStyles();
  const board = props.board;

  return (
    <Card className={`${classes.cardCommon} ${classes.cardRoot}`}>
      <CardActionArea
        className={classes.cardCommon}
        component={Link}
        to={`/b/${board.id}/${board.title}`}
      >
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} variant="h5">
            {board.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
