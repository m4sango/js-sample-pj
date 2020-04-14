import React from "react";
import { Link } from "react-router-dom";

export default function Board(props) {
  const board = props.board;

  return <Link to={`/b/${board.id}/${board.title}`}>{board.title}</Link>;
}
