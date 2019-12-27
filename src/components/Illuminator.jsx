//shows the breakdown of word by number

import React, { useState } from "react";
import PropTypes from "prop-types";

const levelColors = {
  letter: "purple",
  word: "blue",
  sentence: "green",
  paragraph: "orange",
  total: "red"
};
export default function Illuminator({ results }) {
  let value;
  let content;
  if (results.segments.length < 2) {
    // base case
    content = results.segments;
    value = results.value;
  } else {
    content = results.segments.map(segment => {
      return <Illuminator results={segment} />;
    });
    value = results.value;
  }

  const segmentStyle = {
    display: "inline-block",
    padding: "0.1em",
    margin: "0.1em",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: levelColors[results.level],
    verticalAlign: "top"
  };
  const valueStyle = {
    fontWeight: "normal",
    color: levelColors[results.level]
  };
  const contentStyle = {
    fontWeight: "bold"
  };
  return (
    <span style={segmentStyle}>
      <div style={contentStyle}>{content !== " " ? content : "\u00A0"}</div>
      <div style={valueStyle}>{value}</div>
    </span>
  );
}
