import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { constant } from "../REDUCERS/constant";
import "./Input.css";

export const Input = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const addRobo = () => {
    if (!name || !email) {
      alert("Please fill details");
      return;
    }
    dispatch({
      type: constant.ADDROBO,
      payload: { name, email },
    });
    setemail("");
    setname("");
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="SEARCH"
        onChange={(e) => {
          dispatch({ type: constant.SEARCHROBO, payload: e.target.value });
        }}
      />
      <input
        type="text"
        value={name}
        placeholder="ADD NAME"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        value={email}
        placeholder="ADD EMAIL"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <button className="add" onClick={addRobo}>
        ADD
      </button>
    </div>
  );
};
