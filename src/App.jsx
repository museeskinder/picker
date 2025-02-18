import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export const App = () => {
  return (
    <>
      <h1>Select your difficulty</h1>
      <div className={s.workspace}>
        <MenuList></MenuList>
        <DisplayDifficulty difficulty="Low"></DisplayDifficulty>
      </div>
    </>
  );
};
