import React from "react";
import { Link } from "react-router-dom";

export default function Board(props) {
  const board = props.board;

  return (
    <li className="board-section-list-item">
      <Link className="board-tile" to={`/b/${board.id}/${board.title}`}>
        {board.title}
      </Link>
    </li>
  );
}
