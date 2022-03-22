// Showcasing that this actually compiles, but for some reason causes errors when it comes from io-ts/Schemable.d.ts
import * as HKT from "https://esm.sh/fp-ts@v2.11.9/lib/HKT?pin=v72";

export const URI = "test";
export type URI = typeof URI;

export interface Schemable<S extends never> {
  readonly URI: S;
  readonly tuple: <A extends ReadonlyArray<unknown>>(
    ...components: { [K in keyof A]: HKT.Kind<S, A[K]> }
  ) => HKT.Kind<S, A>;
}
