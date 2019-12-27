import React, { useState } from "react";
import Illuminator from "./Illuminator";
import ButtonPanel from "./ButtonPanel";
import GInput from "./GInput";
import Settings from "./Settings";
import { gemParse, codices as codexes } from "./GemLib";

export default function Layout() {
  // state = {
  //     text: null,
  //     settings: null,
  //     operation: null,
  // };
  const [text, setText] = React.useState("Youre mom gay. F F \n aaaa ff");
  const [options, setOptions] = React.useState("aaa");
  // const englishLetters =
  //   "QWERTASDFGZXCVBYUIOPHJKLNMqwertasdfgzxcvbyuiophjklnm ";
  // const asciicodex = englishLetters
  //   .split("")
  //   .map(c => [c, c.charCodeAt(0)])
  //   .reduce((acc, curr) => {
  //     acc[curr[0]] = curr[1];
  //     return acc;
  //   }, {});
  // const simpleCodex = englishLetters.split("").reduce((acc, curr) => {
  //   acc[curr] = curr.toLowerCase().charCodeAt(0) - 96;
  //   if (curr === " ") {
  //     acc[curr] = 0;
  //   }
  //   return acc;
  // }, {});

  // const [text, setText] = React.useState("ge");
  // const [options, setOptions] = React.useState("aaa");
  // const codices = [
  //   {
  //     name: "naeq",
  //     codex: {
  //       A: 1,
  //       " ": 0,
  //       L: 2,
  //       W: 3,
  //       H: 4,
  //       S: 5,
  //       D: 6,
  //       O: 7,
  //       Z: 8,
  //       K: 9,
  //       V: 10,
  //       G: 11,
  //       R: 12,
  //       C: 13,
  //       N: 14,
  //       Y: 15,
  //       J: 16,
  //       U: 17,
  //       F: 18,
  //       Q: 19,
  //       B: 20,
  //       M: 21,
  //       X: 22,
  //       I: 23,
  //       T: 24,
  //       E: 25,
  //       P: 26,
  //       a: 1,
  //       l: 2,
  //       w: 3,
  //       h: 4,
  //       s: 5,
  //       d: 6,
  //       o: 7,
  //       z: 8,
  //       k: 9,
  //       v: 10,
  //       g: 11,
  //       r: 12,
  //       c: 13,
  //       n: 14,
  //       y: 15,
  //       j: 16,
  //       u: 17,
  //       f: 18,
  //       q: 19,
  //       b: 20,
  //       m: 21,
  //       x: 22,
  //       i: 23,
  //       t: 24,
  //       e: 25,
  //       p: 26
  //     }
  //   },
  //   { name: "simple", codex: simpleCodex },
  //   {
  //     name: "ascii",
  //     codex: asciicodex
  //   }
  // ]; // todo: get these from options
  // // calculate = text => {
  // //     return 0
  // // }
  // // handleClick = buttonName => {
  // //     this.setState(this.calculate(this.state, buttonName));
  // // };
  const handleInput = event => {
    setText(event.target.value);
  };

  // render() {
  return (
    <div className="component-app">
      {/* <GInput value={this.state.next || this.state.total || "0"} /> */}
      <GInput initialValue={text} onChange={handleInput} />
      <Settings />
      {codexes.map(codex => {
        return (
          <div>
            <h3>{codex.name}</h3>
            <Illuminator
              results={gemParse(codex, text)}
              icolor="red"
              codex={codex}
              text={text}
            />
          </div>
        );
      })}
      {/* <Illuminator codec={{ a: 1, b: 2 }} /> */}
      {/* <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
  // }
}
