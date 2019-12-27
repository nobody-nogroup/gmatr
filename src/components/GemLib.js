// letter sets
const englishLetters = "QWERTASDFGZXCVBYUIOPHJKLNMqwertasdfgzxcvbyuiophjklnm";

const englishLettersLower = "qwertasdfgzxcvbyuiophjklnm";
const englishSymbols = " !@#$%^&*()-=_+;/][,.:?}{<>`~}]'\\" + '"';

// cyphers
const asciiCypher = englishLetters
  .concat(englishSymbols)
  .split("")
  .map(c => [c, c.charCodeAt(0)])
  .reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
const simpleCypher = englishLetters.split("").reduce((acc, curr) => {
  acc[curr] = curr.toLowerCase().charCodeAt(0) - 96;
  if (curr === " ") {
    acc[curr] = 0;
  }
  return acc;
}, {});
const naeqCypher = {
  A: 1,
  L: 2,
  W: 3,
  H: 4,
  S: 5,
  D: 6,
  O: 7,
  Z: 8,
  K: 9,
  V: 10,
  G: 11,
  R: 12,
  C: 13,
  N: 14,
  Y: 15,
  J: 16,
  U: 17,
  F: 18,
  Q: 19,
  B: 20,
  M: 21,
  X: 22,
  I: 23,
  T: 24,
  E: 25,
  P: 26,
  a: 1,
  l: 2,
  w: 3,
  h: 4,
  s: 5,
  d: 6,
  o: 7,
  z: 8,
  k: 9,
  v: 10,
  g: 11,
  r: 12,
  c: 13,
  n: 14,
  y: 15,
  j: 16,
  u: 17,
  f: 18,
  q: 19,
  b: 20,
  m: 21,
  x: 22,
  i: 23,
  t: 24,
  e: 25,
  p: 26
};

export const codices = [
  {
    name: "NAEQ",
    cypher: naeqCypher
  },
  { name: "Simple", cypher: simpleCypher },
  {
    name: "ASCII",
    cypher: asciiCypher
  }
];
function safeCypher(cypher, text) {
  if (cypher[text]) {
    return cypher[text];
  } else {
    return 0;
  }
}
export function gemParse(codex, text) {
  return gemRecurse(codex.cypher, text, "total");
}

function gemRecurse(codex, text, level) {
  let value;
  if (text.length === 1) {
    // base case
    console.log("ill length 1");
    level = "letter";
    value = safeCypher(codex, text);
    return { segments: text, level: level, value: value };
  } else {
    // non base
    console.log("ill length >1");
    let segments;
    let nextLevel;
    if (text.includes("\n")) {
      segments = text.split(/\n/g);
      nextLevel = "paragraph";
    } else if (text.includes(".")) {
      segments = text.split(/(\.)/g).filter(s => s.length > 0);
      nextLevel = "sentence";
    } else if (text.includes(" ")) {
      segments = text.split(/( )/g).filter(s => s.length > 0);
      nextLevel = "word";
    } else {
      segments = text.split("");
      nextLevel = "letter";
    }

    let parsedSegments = segments.map(seg => gemRecurse(codex, seg, nextLevel));
    value = parsedSegments.reduce((acc, curr) => acc + curr.value, 0);
    return { segments: parsedSegments, level: level, value: value };
  }
}
function gemWords(codex, text, delim) {
  text.split(" ");
}
function findWords(codex, target) {
  let curr = "";
  let results = [];
  const allLetters = englishLettersLower.split("");
}
