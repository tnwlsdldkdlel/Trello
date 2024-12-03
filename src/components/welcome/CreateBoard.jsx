import { useState } from "react";

export const CreateBoard = ({ changeBoard, board, clickCreateBoard }) => {
  return (
    <div className="step">
      <div className="title">작업할 보드의 이름을 지어주세요</div>
      <div className="target">
        <input
          placeholder="My Board"
          name="board"
          value={board}
          onChange={changeBoard}
        ></input>
        <button className="clickable next-btn" onClick={clickCreateBoard}>
          Next
        </button>
      </div>
    </div>
  );
};
