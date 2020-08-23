import React, { FC } from "react";
import cx from "classnames";
import "./styles.css";

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => {
  const x = Date.now() % 2 === 0 ? { test: true } : undefined;
  React.useEffect(() => {
    if (x?.test) {
      console.log("testing");
    }
  }, [x?.test]);

  return (
    <button type="button" className={cx("button", className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
