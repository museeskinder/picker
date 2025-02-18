import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constants";

export const MenuList = (props) => {
    const handleItemClick = (difficulty) => {
        if (typeof props.onItemClick === 'function') {
            props.onItemClick(difficulty);
        }
    };
    console.log(props.difficulty);

    return (
        <div className={s.container}>
            {DIFFICULTIES.map((difficulty) => (
                <MenuListItem
                    isSelected={props.difficulty === difficulty}
                    onClick={handleItemClick}
                    difficulty={difficulty}
                />
            ))}
        </div>
    );
};