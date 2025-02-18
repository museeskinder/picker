import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const getBackgroundColor = () => {
    if (isHovered)
        return "#a5e9ff";
    else
        return "#eff0ef";
  };

  return (
    <div
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{backgroundColor: getBackgroundColor()}}
    >
      Set to: {props.difficulty}
    </div>
  );
};
