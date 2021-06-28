import React from "react";

const WatchButton = (props) => {
  return <button className="btn btn-primary mx-2">{props.watched? "Unwatch" : "Watched"}</button>;
};

export default WatchButton;
