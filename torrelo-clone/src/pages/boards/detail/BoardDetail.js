import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BoardDetail.css";
import ListCreate from "../../../components/boards/detail/ListCreate";
import ListTile from "../../../components/boards/detail/ListTile";
import { makeStyles, Button, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles({
  root: {
    boxSizing: "border-box",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  header: {
    position: "sticky",
    display: "flex",
    top: 0,
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  headerContents: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "4px",
  },
  home: {
    color: "blue",
  },
  homeBtn: {},
  title: {},
  menu: {},
  main: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    margin: "8px",
  },
  listContents: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "80%",
    justifyContent: "start",
    alignItems: "top",
    margin: "8px",
  },
});

export default function BoardDetail(props) {
  const classes = useStyle();
  const [listTiles, setListTiles] = useState([]);

  document.title = props.match.params.title;

  const handleAddNewList = (title) => {
    const before = listTiles.slice();
    const after = before.concat([{ title: title }]);
    setListTiles(after);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerContents}>
          <Button className={classes.homeBtn} component={Link} to="/">
            <HomeIcon className={classes.home}></HomeIcon>
          </Button>
          <Typography className={classes.title} variant="h3">
            {props.match.params.title}
          </Typography>
          <MenuIcon className={classes.menu} fontSize="large"></MenuIcon>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.listContents}>
          {listTiles.map((tile, index) => (
            <ListTile key={`${index}-${tile.title}`} tile={tile}></ListTile>
          ))}
          <ListCreate onClickAddList={handleAddNewList}></ListCreate>
        </div>
      </div>
    </div>
  );
}
