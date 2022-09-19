import React from "react";

function Pages({ page, totalPages, onLeftClick, onRightClick }) {
  return (
    <div className="pages__container">
      <div className="button__wrapper">
        <button className="noselect prev__button" onClick={onLeftClick}>
          Previous
        </button>
        <button className="noselect next__button" onClick={onRightClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pages;
