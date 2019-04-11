import { randomBytes } from "crypto";
import { v4 as uuid } from 'uuid';

const ALPHABET: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const ALPHABET_LENGTH = ALPHABET.length;
const ALPHABET_UPPERCASE = ALPHABET.map(char => char.toUpperCase());

export function generateGameKey(keyLength: number = 4): string {
  const uniqueAlphaChar: Set<string> = new Set<string>();
  let char: string;

  do {
    char = randomAlphaCharacter();
    uniqueAlphaChar.add(char);
  } while (uniqueAlphaChar.size < keyLength);

  return Array.from(uniqueAlphaChar).join("");
}

function randomAlphaCharacter(): string {
  let randIndex = Math.floor(Math.random() * ALPHABET_LENGTH);
  return ALPHABET_UPPERCASE[randIndex];
}

export function generateRandomId(len: number = 10): string {
  let length = len <= 0 ? 10 : len;
  return randomBytes(length).toString("hex");
}

export function generateUUID(): string {
    return uuid();
}
