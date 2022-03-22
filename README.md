# Reproducing issues related to #274 (io-ts)

### Introduction

The ESM test [`io-ts.test.ts`](https://github.com/esm-dev/esm.sh/blob/master/test/deno/io-ts/io-ts.test.ts) shows that this now works `import * as IO from 'https://esm.sh/io-ts`.

However, due to the architecture of `io-ts` in almost all cases it is necessary to import sub-modules directly, e.g. `import * as T from 'https://esm.sh/io-ts/Types`, which does not yet work as demonstrated by [io-ts-schemable.test.ts](./io-ts-schemable.test.ts) (a slight modification from the original test).

On a high-level, the issue is that most of io-ts's sub-modules depend on `io-ts/Schemable` which, for some reason, cannot be compiled and throws with `TS2370 [ERROR]: A rest parameter must be of an array type.`.

Why it cannot be compiled is unexpected, because if we reproduce the `io-ts/Schemable` types directly (see [io-ts-rest-parameter.test.ts](./io-ts-rest-parameter.test.ts)) it does not throw any errors as one would expect.

Associated issue: [#274](https://github.com/esm-dev/esm.sh/issues/274)

### Usage

1. clone repo
2. run `deno test`
