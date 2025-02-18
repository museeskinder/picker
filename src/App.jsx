import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export const App = () => {
  const [difficultyValue, setDfficultyValue] = useState("");
  const changeDifficulty = (difficulty) => {
    setDfficultyValue(difficulty);
  }

  return (
    <>
      <h1>Select your difficulty</h1>
      <div className={s.workspace}>
        <MenuList onItemClick={changeDifficulty} difficulty={difficultyValue}/>
        <DisplayDifficulty difficulty={difficultyValue}/>
      </div>
    </>
  );
};
