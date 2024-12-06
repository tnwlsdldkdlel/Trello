import { useState } from "react";

export const CreateBoard = ({ changeBoard, board, clickCreateBoard }) => {
  const [active, setActive] = useState(false);

  const changeBoardName = (e) => {
    if (e.target.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }

    changeBoard(e);
  };

  return (
    <div className="step">
      <div className="title">
        <b>뚝딱</b>에 오신걸 환영해요 🙋‍♀️
      </div>
      <div className="sub-title">작업 공간의 이름을 지어주세요!</div>
      <div className="target">
        <input
          placeholder="이름을 입력해주세요"
          name="board"
          value={board}
          onChange={changeBoardName}
        ></input>
        <button
          className={"next-btn" + (active ? " active clickable" : "")}
          disabled={!active}
          onClick={clickCreateBoard}
        >
          다음
        </button>
      </div>
    </div>
  );
};
