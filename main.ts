import { mkdirSync, writeFileSync } from "node:fs";

const LINE1 = "I am sorry — I put your grandmother's handwritten recipe card through the shredder because I mistook it for junk mail.";
const LINE2 = "I have learned to check every envelope for handwriting before I shred anything, and from now on I will set aside anything addressed by hand for you to look at first.";

const text = LINE1 + "\n" + LINE2;

const lines = text.split("\n");
if (lines.length !== 2) throw new Error("entry must be exactly 2 lines");
if (lines.some((l) => l.trim().length === 0)) throw new Error("no blank lines allowed");
if (text.length < 1 || text.length > 400) throw new Error("entry must be 1 to 400 characters");
if (lines.some((l) => l.split(".").length - 1 !== 1)) throw new Error("each line must be exactly one sentence");
if (lines.some((l) => l !== l.trim())) throw new Error("no leading or trailing whitespace on any line");
if (lines.some((l) => !l.endsWith("."))) throw new Error("each line must end with a period");
if (text.endsWith("\n")) throw new Error("no trailing newline: exactly 2 lines");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
