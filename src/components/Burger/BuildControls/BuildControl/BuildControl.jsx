import React from "react";
import "./BuildControl.scss";

// const buildControl = (props) => {
//   return (
//     <div>
//       <div className={classes.BuildControl}>{props.labels}</div>
//       <button className={classes.Label}>Less</button>
//       <button className={classes.Label}>More</button>
//     </div>
//   );
// };

const buildControl = (props) => {
  return (
    <div>
      <div className="BuildControl">{props.labels}</div>
      <button
        className="Label"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="Label" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
