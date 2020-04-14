import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BoardDetail.css";
import ListCreate from "../../../components/boards/detail/ListCreate";
import ListTile from "../../../components/boards/detail/ListTile";

export default function BoardDetail(props) {
  const [listTiles, setListTiles] = useState([]);

  document.title = props.match.params.title;

  const handleAddNewList = (title) => {
    const before = listTiles.slice();
    const after = before.concat([{ title: title }]);
    setListTiles(after);
  };

  return (
    <div>
      <div className="board-header">
        <h2>{props.match.params.title}</h2>
        <Link to="/">ホーム</Link>
      </div>
      <div className="board-main">
        {listTiles.map((tile, index) => (
          <ListTile key={`${index}-${tile.title}`} tile={tile}></ListTile>
        ))}
        <ListCreate onClickAddList={handleAddNewList}></ListCreate>
      </div>
    </div>
  );
}
