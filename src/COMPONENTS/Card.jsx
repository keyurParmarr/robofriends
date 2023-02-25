import React from "react";
import { useDispatch } from "react-redux";
import { constant } from "../REDUCERS/constant";
import "./Card.css";

export const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="robotbox">
      <div className="del">
        <button
          className="delbtn"
          onClick={() => {
            dispatch({ type: constant.DELETEROBO, payload: props.robot.name });
          }}
        >
          &times;
        </button>
      </div>
      <img src={`https://robohash.org/${props.i}`} height="250" width={300} />
      <div>{props.i + 1}</div>
      <div>{props.robot.name}</div>
      <div>{props.robot.email}</div>
    </div>
  );
};
