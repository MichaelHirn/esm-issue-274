import { assert } from "https://deno.land/std@0.130.0/testing/asserts.ts";
import * as T from "https://esm.sh/io-ts@v2.2.16/Type?pin=v72";
import { isRight } from "https://esm.sh/fp-ts@v2.11.9/Either?pin=v72";

// Slightly modified version of original test by depending on Type module directly

const string = T.literal("a string");

Deno.test("check common modules", () => {
  assert(isRight(string.decode("a string")));
  assert(!isRight(string.decode(null)));
});
