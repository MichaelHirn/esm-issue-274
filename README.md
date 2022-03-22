# Reproducing issues related to #274 (io-ts)

### Introduction

This is a slightly modified example of the [`io-ts.test.ts`](https://github.com/esm-dev/esm.sh/blob/master/test/deno/io-ts/io-ts.test.ts) where instead of requiring the `index.ts` file of `io-ts`, we require one of the various sub-modules directly which breaks the test as demonstrated in [io-ts-schemable.test.ts].

On a high-level, the issue is that most of these sub-modules depend on `io-ts/Schemable` which, for some reason, cannot be compiled and throws with `TS2370 [ERROR]: A rest parameter must be of an array type.`.

Why it cannot be compiled is unexpected, because if we reproduce the `io-ts/Schemable` types directly (see [io-ts-rest-parameter.test.ts]) it does not throw any errors as one would expect.

### Usage

1. clone repo
2. run `deno test`
