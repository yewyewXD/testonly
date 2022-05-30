import React from "react";
import moduleStyle from "./PrimaryBtn.module.scss";
import clsx from "clsx";

export default function PrimaryBtn({ children, hoverBgColor, bgColor, style }) {
  return (
    <button
      className={clsx(moduleStyle.btn, {
        [`${moduleStyle.btnBgBlack}`]: hoverBgColor === "black",
        [`${moduleStyle.btnBgWhite}`]: hoverBgColor === "white",
        [`${moduleStyle.btnBlack}`]: bgColor === "black",
      })}
      style={style}
    >
      {children}
    </button>
  );
}
