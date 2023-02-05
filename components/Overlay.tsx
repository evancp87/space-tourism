import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

function Overlay() {

// function Overlay({ overlay }) {
  return (
    // <div
    //   className={overlay && classnames("overlay", { active: overlay })}
    // ></div>
    <div>Overlay</div>
  );
}

Overlay.propTypes = {
  overlay: PropTypes.bool,
};

export default Overlay;
