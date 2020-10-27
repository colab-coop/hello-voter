/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Convert
// Default, Use with em() and rem() functions
export const baseFontSize = 16;

/**
 * Convert a given px unit to a rem unit
 * @param {number} px
 * @returns {string}
 */
export function rem(px) {
  return `${px / baseFontSize}rem`;
}

// These should stay in sync with variables in `./variables.scss`
export const breakpoints = {
  sm: {
    width: rem(320),
    columns: 4,
    margin: '0',
  },
  md: {
    width: rem(672),
    columns: 8,
    margin: rem(16),
  },
  lg: {
    width: rem(1056),
    columns: 16,
    margin: rem(16),
  },
  xlg: {
    width: rem(1312),
    columns: 16,
    margin: rem(16),
  },
  max: {
    width: rem(1584),
    columns: 16,
    margin: rem(24),
  },
};

export const spacing = [
  '0px', // 0
  '2px', // 1
  '4px', // 2
  '8px', // 3
  '12px', // 4
  '16px', // 5
  '24px', // 6
  '32px', // 7
  '48px', // 8
  '64px', // 9
  '96px', // 10
]

const black = "#000000";
const black100 = black;

const white = "#ffffff";
const white0 = white;

const yellow = "#fdd13a";
const yellow20 = yellow;

const orange = "#fc7b1e";
const orange40 = orange;

const red10 = "#fff0f1";
const red20 = "#fcd0d3";
const red30 = "#ffa4a9";
const red40 = "#ff767c";
const red50 = "#fb4b53";
const red60 = "#da1e28";
const red70 = "#a51920";
const red80 = "#750e13";
const red90 = "#570408";
const red100 = "#2c080a";
const red = {
  10: red10,
  20: red20,
  30: red30,
  40: red40,
  50: red50,
  60: red60,
  70: red70,
  80: red80,
  90: red90,
  100: red100,
};

const magenta10 = "#fff0f6";
const magenta20 = "#ffcfe1";
const magenta30 = "#ffa0c2";
const magenta40 = "#fa75a6";
const magenta50 = "#ee538b";
const magenta60 = "#d12765";
const magenta70 = "#a11950";
const magenta80 = "#760a3a";
const magenta90 = "#57002b";
const magenta100 = "#2a0a16";
const magenta = {
  10: magenta10,
  20: magenta20,
  30: magenta30,
  40: magenta40,
  50: magenta50,
  60: magenta60,
  70: magenta70,
  80: magenta80,
  90: magenta90,
  100: magenta100,
};

const purple10 = "#f7f1ff";
const purple20 = "#e6d6ff";
const purple30 = "#d0b0ff";
const purple40 = "#bb8eff";
const purple50 = "#a66efa";
const purple60 = "#8a3ffc";
const purple70 = "#6e32c9";
const purple80 = "#4f2196";
const purple90 = "#38146b";
const purple100 = "#1e1033";
const purple = {
  10: purple10,
  20: purple20,
  30: purple30,
  40: purple40,
  50: purple50,
  60: purple60,
  70: purple70,
  80: purple80,
  90: purple90,
  100: purple100,
};

const blue10 = "#edf4ff";
const blue20 = "#c9deff";
const blue30 = "#97c1ff";
const blue40 = "#6ea6ff";
const blue50 = "#408bfc";
const blue60 = "#0062ff";
const blue70 = "#054ada";
const blue80 = "#0530ad";
const blue90 = "#061f80";
const blue100 = "#051243";
const blue = {
  10: blue10,
  20: blue20,
  30: blue30,
  40: blue40,
  50: blue50,
  60: blue60,
  70: blue70,
  80: blue80,
  90: blue90,
  100: blue100,
};

const cyan10 = "#e3f6ff";
const cyan20 = "#b3e6ff";
const cyan30 = "#6ccaff";
const cyan40 = "#30b0ff";
const cyan50 = "#1191e6";
const cyan60 = "#0072c3";
const cyan70 = "#0058a1";
const cyan80 = "#003d73";
const cyan90 = "#002b50";
const cyan100 = "#07192b";
const cyan = {
  10: cyan10,
  20: cyan20,
  30: cyan30,
  40: cyan40,
  50: cyan50,
  60: cyan60,
  70: cyan70,
  80: cyan80,
  90: cyan90,
  100: cyan100,
};

const teal10 = "#dbfbfb";
const teal20 = "#92eeee";
const teal30 = "#20d5d2";
const teal40 = "#00bab6";
const teal50 = "#009c98";
const teal60 = "#007d79";
const teal70 = "#006161";
const teal80 = "#004548";
const teal90 = "#003137";
const teal100 = "#081a1c";
const teal = {
  10: teal10,
  20: teal20,
  30: teal30,
  40: teal40,
  50: teal50,
  60: teal60,
  70: teal70,
  80: teal80,
  90: teal90,
  100: teal100,
};

const green10 = "#dafbe4";
const green20 = "#9deeb2";
const green30 = "#56d679";
const green40 = "#3dbb61";
const green50 = "#24a148";
const green60 = "#198038";
const green70 = "#10642a";
const green80 = "#054719";
const green90 = "#01330f";
const green100 = "#081b09";
const green = {
  10: green10,
  20: green20,
  30: green30,
  40: green40,
  50: green50,
  60: green60,
  70: green70,
  80: green80,
  90: green90,
  100: green100,
};

const coolGray10 = "#f2f4f8";
const coolGray20 = "#d5d9e0";
const coolGray30 = "#b9bfc7";
const coolGray40 = "#9fa5ad";
const coolGray50 = "#868d95";
const coolGray60 = "#697077";
const coolGray70 = "#50565b";
const coolGray80 = "#373d42";
const coolGray90 = "#242a2e";
const coolGray100 = "#13171a";
const coolGray = {
  10: coolGray10,
  20: coolGray20,
  30: coolGray30,
  40: coolGray40,
  50: coolGray50,
  60: coolGray60,
  70: coolGray70,
  80: coolGray80,
  90: coolGray90,
  100: coolGray100,
};

const gray10 = "#f3f3f3";
const gray20 = "#dcdcdc";
const gray30 = "#bebebe";
const gray40 = "#a4a4a4";
const gray50 = "#8c8c8c";
const gray60 = "#6f6f6f";
const gray70 = "#565656";
const gray80 = "#3d3d3d";
const gray90 = "#282828";
const gray100 = "#171717";
const gray = {
  10: gray10,
  20: gray20,
  30: gray30,
  40: gray40,
  50: gray50,
  60: gray60,
  70: gray70,
  80: gray80,
  90: gray90,
  100: gray100,
};

const warmGray10 = "#f7f3f1";
const warmGray20 = "#e0dbda";
const warmGray30 = "#c1bcbb";
const warmGray40 = "#a7a2a2";
const warmGray50 = "#8f8b8b";
const warmGray60 = "#726e6e";
const warmGray70 = "#595555";
const warmGray80 = "#403c3c";
const warmGray90 = "#2b2828";
const warmGray100 = "#1a1717";
const warmGray = {
  10: warmGray10,
  20: warmGray20,
  30: warmGray30,
  40: warmGray40,
  50: warmGray50,
  60: warmGray60,
  70: warmGray70,
  80: warmGray80,
  90: warmGray90,
  100: warmGray100,
};

export const colors = {
  black,
  blue,
  coolGray,
  cyan,
  gray,
  green,
  magenta,
  orange: orange40,
  purple,
  red,
  teal,
  warmGray,
  white,
  yellow: yellow20,
};
