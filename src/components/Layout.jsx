import React, { useState } from "react";
import Illuminator from "./Illuminator";
import GInput from "./GInput";
import Settings from "./Settings";
import { gemParse, codices as codexes } from "./GemLib";

export default function Layout() {
  const [text, setText] = React.useState("gmatr");
  const [options, setOptions] = React.useState("aaa");
  const handleInput = event => {
    setText(event.target.value);
  };

  return (
    <div className="component-app">
      <GInput initialValue={text} onChange={handleInput} />
      {/* <Settings /> */}
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
    </div>
  );
  // }
}
