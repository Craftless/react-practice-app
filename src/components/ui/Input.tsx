import classes from "./Input.module.css";
import React from "react";

interface InputSettings {
  type: string;
  min: string;
  max: string;
  step: string;
  default: string;
}

const Input = React.forwardRef(
  (
    {
      label,
      id,
      uniqueId,
      settings,
    }: {
      label: string;
      id: string;
      uniqueId: string;
      settings: InputSettings;
    },
    ref: any
  ) => {
    return (
      <div className={classes.input}>
        <label htmlFor={`${id}-${uniqueId}`}>{label}</label>
        <input
          id={`${id}-${uniqueId}`}
          {...settings}
          ref={ref}
          defaultValue={settings.default}
        />
      </div>
    );
  }
);

export default Input;
