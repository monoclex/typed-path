export interface TypedRoute<
  T1, T2, T3, T4,
  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,
  A1 extends RouteParam<T1> | QueryParam<T1, T2, T3, Q1, Q2, Q3>,
  A2 extends RouteParam<T2> | QueryParam<T2, T3, T4, Q2, Q3, Q4>
> {
  strings: TemplateStringsArray;
  arg1?: A1;
  arg2?: A2;
}

export interface RouteParam<T> {
  [key: string]: RoutePartType<T>;
}

export interface QueryParam<T1, T2, T3, A1 extends RouteParam<T1>, A2 extends RouteParam<T2>, A3 extends RouteParam<T3>> {
  "?"?: [A1?, A2?, A3?];
}

export function path<
T1, T2, T3, T4,
Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,
A1 extends RouteParam<T1> | QueryParam<T1, T2, T3, Q1, Q2, Q3>,
A2 extends RouteParam<T2> | QueryParam<T2, T3, T4, Q2, Q3, Q4>
>(
  strings: TemplateStringsArray,
  arg1?: A1,
  arg2?: A2
): TypedRoute<T1, T2, T3, T4, Q1, Q2, Q3, Q4, A1, A2> {
  return {
    strings,
    arg1,
    arg2
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
