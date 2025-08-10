import {
  bgBlack,
  bgBlue,
  bgBrightBlack,
  bgBrightBlue,
  bgBrightCyan,
  bgBrightGreen,
  bgBrightMagenta,
  bgBrightRed,
  bgBrightWhite,
  bgBrightYellow,
  bgCyan,
  bgGreen,
  bgMagenta,
  bgRed,
  bgRgb24,
  bgWhite,
  bgYellow,
  black,
  blue,
  bold,
  brightBlack,
  brightBlue,
  brightCyan,
  brightGreen,
  brightMagenta,
  brightRed,
  brightWhite,
  brightYellow,
  cyan,
  dim,
  green,
  hidden,
  inverse,
  italic,
  magenta,
  red,
  reset,
  rgb24,
  strikethrough,
  underline,
  white,
  yellow,
} from "./colors.ts";
import * as accents from "./accents.ts";

const sample = "  Sample Text  ";

console.log("\n=== Text Colors ===");
console.log(black(sample));
console.log(red(sample));
console.log(green(sample));
console.log(yellow(sample));
console.log(blue(sample));
console.log(magenta(sample));
console.log(cyan(sample));
console.log(white(sample));

console.log("\n=== Bright Text Colors ===");
console.log(brightBlack(sample));
console.log(brightRed(sample));
console.log(brightGreen(sample));
console.log(brightYellow(sample));
console.log(brightBlue(sample));
console.log(brightMagenta(sample));
console.log(brightCyan(sample));
console.log(brightWhite(sample));

console.log("\n=== Background Colors ===");
console.log(bgBlack(sample));
console.log(bgRed(sample));
console.log(bgGreen(sample));
console.log(bgYellow(sample));
console.log(bgBlue(sample));
console.log(bgMagenta(sample));
console.log(bgCyan(sample));
console.log(bgWhite(sample));

console.log("\n=== Bright Background Colors ===");
console.log(bgBrightBlack(sample));
console.log(bgBrightRed(sample));
console.log(bgBrightGreen(sample));
console.log(bgBrightYellow(sample));
console.log(bgBrightBlue(sample));
console.log(bgBrightMagenta(sample));
console.log(bgBrightCyan(sample));
console.log(bgBrightWhite(sample));

console.log("\n=== Text Styles ===");
console.log(bold(sample));
console.log(dim(sample));
console.log(italic(sample));
console.log(underline(sample));
console.log(inverse(sample));
console.log(hidden(sample));
console.log(strikethrough(sample));
console.log(reset(sample));

console.log("\n=== Custom RGB Colors ===");
console.log(rgb24(sample, { r: 255, g: 165, b: 0 })); // orange
console.log(rgb24(sample, { r: 148, g: 0, b: 211 })); // violet
console.log(bgRgb24(sample, { r: 0, g: 128, b: 128 })); // teal bg

console.log("\n=== Accent Colors ===");
for (const [name, fn] of Object.entries(accents)) {
  if (typeof fn === "function") {
    console.log(fn(` ${name} `.padEnd(20, " ")));
  }
}
