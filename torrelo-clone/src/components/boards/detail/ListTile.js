import React, { useState } from "react";
import "./ListTile.css";

export default function ListTile(props) {
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
    <div className="list-wrapper">
      <div className="list-contents">
        <div className="list-header">
          <h2 className="list-name">{props.tile.title}</h2>
        </div>
        <div className="card-list">
          {cardList.map((card, index) => (
            <Card key={`${index}-${card.title}`} card={card} />
          ))}
        </div>
        <CardInput
          title={cardTitle}
          onChangeTitle={handleCardTitleChanges}
          onClickCardAdd={handleOnClickCardAdd}
          onClose={handleCloseCardInput}
        ></CardInput>
        <CardAdd onClickCardAdd={handleOpenCardInput} />
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="card-details">
      <span className="card-title">{props.card.title}</span>
    </div>
  );
};

const CardInput = (props) => {
  return (
    <div className="card-input">
      <div className="card-input-field">
        <textarea
          className="card-input-title"
          value={props.title}
          placeholder="このカードにタイトルを入力..."
          onChange={props.onChangeTitle}
        ></textarea>
      </div>
      <div className="card-input-controls">
        <input
          className="card-add-submit"
          type="submit"
          onClick={props.onClickCardAdd}
          value="カードを追加"
        ></input>
        <a className="card-input-close-button" href="#" onClick={props.onClose}>
          X
        </a>
      </div>
    </div>
  );
};

const CardAdd = (props) => {
  return (
    <div className="card-add">
      <a className="open-card-add" href="#" onClick={props.onClickCardAdd}>
        <span className="card-add-icon"></span>
        <span className="card-add-text">カードを追加</span>
        <span className="card-add-text hide">さらにカードを追加</span>
      </a>
    </div>
  );
};
