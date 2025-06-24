import React, { useState } from "react";
import "./component.css";
function ColourPicker(props) {
  return (
    <>
      <div className="flexi space-side-ri">
        <div
          className={`space-side text-${
            props.mode === "light" ? "dark" : "light"
          } text-center flexi-sp`}
        >
          BG Colour
        </div>
        <div className="flexi">
          <input
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            value={props.colour}
            title="Choose your color"
            onChange={props.handleColourChange}
          />
        </div>
      </div>
    </>
  );
}

export default ColourPicker;
