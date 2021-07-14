import React from "react";
import "../Sass/Button/button.css"

function Button({ btnStyle, title }) {
  return (
    <div>
      <button className={btnStyle}>{title}</button>
    </div>
  );
}

export default Button;
