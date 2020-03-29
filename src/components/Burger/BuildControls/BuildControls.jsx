import React from "react";
// import classes from "./BuildControls.scss";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.scss";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

// const BuildControls = (props) => {
//   return (
//     <div className={classes.BuildControls}>
//       {controls.map((ctrl) => (
//         <BuildControl key={ctrl.label} label={ctrl.label} />
//       ))}
//     </div>
//   );
// };

const BuildControls = (props) => {
  console.log("BuildControlsProps", props);
  return (
    <div className="BuildControls">
      <p>Current price: {props.price.toFixed(2)}</p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        disabled={!props.purchasable}
        className="OrderButton"
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
