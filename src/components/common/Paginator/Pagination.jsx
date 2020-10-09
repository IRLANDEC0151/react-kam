import React, { useState } from "react";
import s from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPositionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPositionPageNumber = portionNumber * props.portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Назад
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPositionPageNumber && p <= rightPositionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={props.currentPage === p ? s.selectedPage : ""}
              key={p}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionNumber < portionsCount && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Далее
        </button>
      )}
    </div>
  );
};

export default Paginator;
