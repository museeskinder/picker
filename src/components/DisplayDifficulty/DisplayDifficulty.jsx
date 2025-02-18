import s from "./style.module.css";

export function DisplayDifficulty(props) {
  const difficulty = props.difficulty || "Not set";
  return <div className={s.container}>Difficulty is set to: {difficulty}</div>;
}
