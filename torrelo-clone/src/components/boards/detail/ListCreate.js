import React, { useState } from "react";
import "./ListCreate.css";

export default function ListCreate(props) {
  const [listTitle, setListTitle] = useState("");

  const handleListNameInputChanges = (e) => {
    setListTitle(e.target.value);
  };

  const handleCloseListCreate = () => {
    // TODO
  };

  const handleOnClickAddList = (e) => {
    e.preventDefault();

    if (!listTitle) {
      return;
    }

    props.onClickAddList(listTitle);
    resetInputField();
  };

  const resetInputField = () => {
    setListTitle("");
  };

  return (
    <div className="add-list">
      <form>
        <a href="#">
          <span className="add-list-text">リストを追加</span>
        </a>
        <input
          className="list-name-input"
          type="text"
          value={listTitle}
          name="add-list-title"
          placeholder="リストのタイトルを入力..."
          onChange={handleListNameInputChanges}
        ></input>
        <div className="list-add-controls">
          <input
            className="list-add-button"
            type="submit"
            value="リストを追加"
            onClick={handleOnClickAddList}
          ></input>
          <a
            className="add-list-close-button"
            href="#"
            onClick={handleCloseListCreate}
          >
            X
          </a>
        </div>
      </form>
    </div>
  );
}
