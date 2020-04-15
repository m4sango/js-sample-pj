import React, { useState } from "react";
import "./ListTile.css";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  listCard: {
    width: "30vw",
    minWidth: "30vw",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightblue",
    justifyContent: "top",
    alignItems: "center",
    margin: "0 8px 0 0",
  },

  listTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "white",
  },

  cardInput: {
    marginTop: "8px",
  },

  innerCard: {
    margin: "8px auto",
  },
});

export default function ListTile(props) {
  const classes = useStyles();

  const [cardList, setCardList] = useState([]);
  const [cardTitle, setCardTitle] = useState("");

  const handleCardTitleChanges = (e) => {
    setCardTitle(e.target.value);
  };

  const handleOnClickCardAdd = (e) => {
    e.preventDefault();
    const card = { title: cardTitle };
    const list = cardList.slice();
    list.push(card);
    setCardList(list);
    resetInputField();
  };

  const handleOpenCardInput = () => {
    // TODO: カード入力を開いて、カード追加ボタンをhiddenに
  };

  const handleCloseCardInput = () => {
    // TODO: カード入力を閉じて、カード追加ボタンをopenに
  };

  const resetInputField = () => {
    setCardTitle("");
  };

  return (
    <Card className={classes.listCard}>
      <CardContent>
        <Typography className={classes.listTitle}>
          {props.tile.title}
        </Typography>
        {cardList.map((card, index) => (
          <Card key={`${index}-${card.title}`} className={classes.innerCard}>
            <CardContent>
              <Typography>{card.title}</Typography>
            </CardContent>
          </Card>
        ))}

        <TextField
          className={classes.cardInput}
          id="outlined-basic"
          label=""
          value={cardTitle}
          variant="outlined"
          placeholder="このカードにタイトルを入力..."
          onChange={handleCardTitleChanges}
        ></TextField>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOnClickCardAdd}>
          カードを追加
        </Button>
      </CardActions>
    </Card>
  );
}
