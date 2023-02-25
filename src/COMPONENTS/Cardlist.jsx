import React from "react";
import { Card } from "./Card";
import "./Cardlist.css";
export const Cardlist = (props) => {
  return (
    <div className="outbox">
      {props.newarr.map((e, i) => {
        return <Card robot={e} i={i} />;
      })}
    </div>
  );
};
