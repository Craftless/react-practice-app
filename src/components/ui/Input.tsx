import classes from "./Input.module.css";

interface InputSettings {
  type: string;
  min: string;
  max: string;
  step: string;
}

function Input({
  label,
  id,
  uniqueId,
  settings,
}: {
  label: string;
  id: string;
  uniqueId: string;
  settings: InputSettings;
}) {
  return (
    <div className={classes.input}>
      <label htmlFor={`${id}-${uniqueId}`}>{label}</label>
      <input id={`${id}-${uniqueId}`} {...settings} />
    </div>
  );
}

export default Input;
