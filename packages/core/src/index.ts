export type RouteOrQueryParam<
  T1, T2, T3, T4, Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>
>
  = RouteParam<T1> | QueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>;

export interface TypedRoute<
  T1, T2, T3, T4, T5, T6, T7, T8,

  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
  Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>,

  A1 extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>,
  A2 extends RouteOrQueryParam<T2, T3, T4, T5, Q2, Q3, Q4, Q5>,
  A3 extends RouteOrQueryParam<T3, T4, T5, T6, Q3, Q4, Q5, Q6>,
  A4 extends RouteOrQueryParam<T4, T5, T6, T7, Q4, Q5, Q6, Q7>,
  A5 extends RouteOrQueryParam<T5, T6, T7, T8, Q5, Q6, Q7, Q8>,
> {
  strings: TemplateStringsArray;

  arg1?: A1; arg2?: A2; arg3?: A3; arg4?: A4; arg5?: A5;
}

export interface RouteParam<T> {
  [key: string]: RoutePartType<T>;
}

export interface QueryParam<
  T1, T2, T3, T4, A1 extends RouteParam<T1>, A2 extends RouteParam<T2>, A3 extends RouteParam<T3>, A4 extends RouteParam<T4>
> {
  "?"?: [A1?, A2?, A3?, A4?];
}

export function path<
T1, T2, T3, T4, T5, T6, T7, T8,

Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>,

A1 extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>,
A2 extends RouteOrQueryParam<T2, T3, T4, T5, Q2, Q3, Q4, Q5>,
A3 extends RouteOrQueryParam<T3, T4, T5, T6, Q3, Q4, Q5, Q6>,
A4 extends RouteOrQueryParam<T4, T5, T6, T7, Q4, Q5, Q6, Q7>,
A5 extends RouteOrQueryParam<T5, T6, T7, T8, Q5, Q6, Q7, Q8>,
>(
  strings: TemplateStringsArray,
  arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4, arg5?: A5,
): TypedRoute<T1, T2, T3, T4, T5, T6, T7, T8, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, A1, A2, A3, A4, A5> {
  return {
    strings,
    arg1, arg2, arg3, arg4, arg5
  };
}

export interface RoutePartType<T> {
  verify(input: any): T | undefined;
}

export const string: RoutePartType<string> = {
  verify: (input) => {
    if (typeof input === "string") {
      return input;
    }

    return undefined;
  }
};

export const number: RoutePartType<number> = {
  verify: (input) => {
    if (typeof input === "number") {
      return input;
    }

    if (typeof input === "string") {
      return parseInt(input)
    }

    return undefined;
  }
};

// let k = path`/uhh/${{what: string}}/ok?${{"?": [{name: string}, {birthday: number}]}}`;
