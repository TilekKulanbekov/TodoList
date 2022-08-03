import React from "react";
import s from "./Background.module.scss";
import { ImDiamonds } from "react-icons/im";

export const Background = React.memo(function MemoBackground() {
  const arr = Array(500).fill(null);
  return (
    <div className={s.root}>
      {arr.map((_, index) => {
        const random = Math.random() + 1;
        return (
          <span className={s.heartwow} key={index}>
            {/* <ImDiamonds fontSize={50 * random} />{" "} */}
          </span>
        );
      })}
    </div>
  );
});
