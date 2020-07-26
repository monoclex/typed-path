export interface TypedRoute<T1, T2, T3, T4> {
  strings: TemplateStringsArray;
  arg1?: RouteParam<T1> | QueryParam<T1, T2, T3>;
  arg2?: RouteParam<T2> | QueryParam<T2, T3, T4>;
}

export interface RouteParam<T> {
  [key: string]: RoutePartType<T>;
}

export interface QueryParam<T1, T2, T3> {
  "?"?: QueryParams<T1, T2, T3>;
}

export type QueryParams<T1, T2, T3> = [RouteParam<T1>?, RouteParam<T2>?, RouteParam<T3>?];

export function path<T1, T2, T3, T4>(
  strings: TemplateStringsArray,
  arg1?: RouteParam<T1> | QueryParam<T1, T2, T3>,
  arg2?: RouteParam<T2> | QueryParam<T2, T3, T4>
): TypedRoute<T1, T2, T3, T4> {
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
