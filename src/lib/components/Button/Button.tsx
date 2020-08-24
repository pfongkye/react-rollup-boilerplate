import React, { FC } from "react";
import cx from "classnames";
import "./styles.css";

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
  foo?: Record<string, unknown>;
}

// eslint-disable-next-line arrow-parens
export const Button: FC<IButtonProps> = (props) => {
  const x = Date.now() % 2 === 0 ? { test: true } : undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.useEffect(() => {
    if (x?.test) {
      console.log("testing");
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props?.foo?.bar);
  }, [x?.test, props]);

  return (
    <button type="button" className={cx("button", props.className)} onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
};
