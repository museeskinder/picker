import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export const MenuList = () => {
    return (
        <div className={s.container}>
            <MenuListItem difficulty="Low"></MenuListItem>
            <MenuListItem difficulty="Medium"></MenuListItem>
            <MenuListItem difficulty="High"></MenuListItem>
            <MenuListItem difficulty="Insane"></MenuListItem>
        </div>
    );
};