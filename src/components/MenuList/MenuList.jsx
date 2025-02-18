import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export const MenuList = (props) => {
    const handleItemClick = (difficulty) => {
        if (typeof props.onItemClick === 'function') {
            props.onItemClick(difficulty);
        }
    };
    console.log(props.difficulty);

    return (
        <div className={s.container}>
            <MenuListItem isSelected={props.difficulty === "Low"} onClick={handleItemClick} difficulty="Low" label="Easy"/>
            <MenuListItem isSelected={props.difficulty === "Medium"} onClick={handleItemClick} difficulty="Medium" label="Moderate"/>
            <MenuListItem isSelected={props.difficulty === "High"} onClick={handleItemClick} difficulty="High" label="Challenging"/>
            <MenuListItem isSelected={props.difficulty === "Insane"}  onClick={handleItemClick} difficulty="Insane" label="Extreme"/>
        </div>
    );
};