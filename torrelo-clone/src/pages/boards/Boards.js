import React, { useState } from "react";
import Board from "../../components/boards/Board";
import "./Boards.css";
import BoardCreateDialog from "../../components/boards/BoardCreateDialog";
import uuid from "react-uuid";

export default function Boards() {
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);
  //   setBoards({ title: "テスト", id: "abcd" });

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
    <div className="boards-wrapper">
      <ul className="board-section-list">
        {boards.map((board, index) => (
          <Board key={`${index}-${board.title}`} board={board}></Board>
        ))}
        <li className="board-section-list-item">
          <div
            className="board-tile board-create"
            onClick={handleOnClickCreateBoard}
          >
            <p>新しいボードを作成</p>
          </div>
        </li>
      </ul>
      <BoardCreateDialog
        open={open}
        onClose={handleDialogClose}
        onCreate={handleOnCreate}
      />
    </div>
  );
}
