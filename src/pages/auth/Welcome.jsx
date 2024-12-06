import { useState } from "react";
import "../../styles/welcome.css";
import { SelectTarget } from "../../components/welcome/SelectTarget";
import { CreateBoard } from "../../components/welcome/CreateBoard";
import { createTeam } from "../../api/Team";
import { useSelector } from "react-redux";
import { createBoard } from "../../api/BoardApi";
import { useNavigate } from "react-router-dom";
import { CreateTeam } from "../../components/welcome/CreateTeam";

export const Welcome = () => {
  const [step, setStep] = useState("target");
  const [target, setTarget] = useState("");
  const [board, setBoard] = useState("");
  const { uid } = useSelector((state) => state.auth);
  const naviage = useNavigate();

  const changeBoard = (e) => {
    setBoard(e.target.value);
  };

  const clickCreateBoard = async () => {
    if (target === "P") {
      const teamUid = await createTeam([uid]);
      await createBoard(teamUid, board);

      naviage("/");
    } else {
      setStep("team");
    }
  };

  return (
    <div className="welcome">
      <div className="content">
        {step === "target" && (
          <SelectTarget setStep={setStep} setTarget={setTarget}></SelectTarget>
        )}
        {step === "board" && (
          <CreateBoard
            setStep={setStep}
            changeBoard={changeBoard}
            board={board}
            clickCreateBoard={clickCreateBoard}
          ></CreateBoard>
        )}
        {step === "team" && (
          <CreateTeam
            setStep={setStep}
            changeBoard={changeBoard}
            board={board}
            clickCreateBoard={clickCreateBoard}
          ></CreateTeam>
        )}
      </div>
    </div>
  );
};
