import React, { useState } from "react";
import Board from "../../components/boards/Board";
import "./Boards.css";

export default function Boards() {
  const [boards, setBoards] = useState([{ title: "テスト", id: "abcd" }]);
  //   setBoards({ title: "テスト", id: "abcd" });

  return (
    <ul className="board-section-list">
      <li>新しいボードを作成</li>
      {boards.map((board, index) => (
        <Board key={`${index}-${board.title}`} board={board}></Board>
      ))}
    </ul>
  );
}
