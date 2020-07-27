export type RouteOrQueryParam<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,
  
  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
  Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>, Q9 extends RouteParam<T9>, Q10 extends RouteParam<T10>,
>
  = RouteParam<T1> | QueryParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10>;

export interface TypedRoute<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,

  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
  Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>, Q9 extends RouteParam<T9>, Q10 extends RouteParam<T10>,
  Q11 extends RouteParam<T11>, Q12 extends RouteParam<T12>, Q13 extends RouteParam<T13>, Q14 extends RouteParam<T14>,
  Q15 extends RouteParam<T15>, Q16 extends RouteParam<T16>, Q17 extends RouteParam<T17>, Q18 extends RouteParam<T18>,
  Q19 extends RouteParam<T19>,

  A1 extends RouteOrQueryParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10>,
  A2 extends RouteOrQueryParam<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11>,
  A3 extends RouteOrQueryParam<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12>,
  A4 extends RouteOrQueryParam<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13>,
  A5 extends RouteOrQueryParam<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14>,
  A6 extends RouteOrQueryParam<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15>,
  A7 extends RouteOrQueryParam<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16>,
  A8 extends RouteOrQueryParam<T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17>,
  A9 extends RouteOrQueryParam<T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18>,
  A10 extends RouteOrQueryParam<T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19>,
> {
  strings: TemplateStringsArray;

  arg1?: A1; arg2?: A2; arg3?: A3; arg4?: A4; arg5?: A5; arg6?: A6; arg7?: A7; arg8?: A8, arg9?: A9, arg10?: A10;
}

export interface RouteParam<T> {
  [key: string]: RoutePartType<T>;
}

export interface QueryParam<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,
  
  A1 extends RouteParam<T1>, A2 extends RouteParam<T2>, A3 extends RouteParam<T3>, A4 extends RouteParam<T4>, A5 extends RouteParam<T5>,
  A6 extends RouteParam<T6>, A7 extends RouteParam<T7>, A8 extends RouteParam<T8>, A9 extends RouteParam<T9>, A10 extends RouteParam<T10>,
> {
  "?"?: [A1?, A2?, A3?, A4?, A5?, A6?, A7?, A8?, A9?, A10?];
}

export function path<
T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,

Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>, Q9 extends RouteParam<T9>, Q10 extends RouteParam<T10>,
Q11 extends RouteParam<T11>, Q12 extends RouteParam<T12>, Q13 extends RouteParam<T13>, Q14 extends RouteParam<T14>,
Q15 extends RouteParam<T15>, Q16 extends RouteParam<T16>, Q17 extends RouteParam<T17>, Q18 extends RouteParam<T18>,
Q19 extends RouteParam<T19>,

A1 extends RouteOrQueryParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10>,
A2 extends RouteOrQueryParam<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11>,
A3 extends RouteOrQueryParam<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12>,
A4 extends RouteOrQueryParam<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13>,
A5 extends RouteOrQueryParam<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14>,
A6 extends RouteOrQueryParam<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15>,
A7 extends RouteOrQueryParam<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16>,
A8 extends RouteOrQueryParam<T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17>,
A9 extends RouteOrQueryParam<T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18>,
A10 extends RouteOrQueryParam<T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19>,
>(
  strings: TemplateStringsArray,
  arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4, arg5?: A5, arg6?: A6, arg7?: A7, arg8?: A8, arg9?: A9, arg10?: A10,

): TypedRoute<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,
  Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19,
  A1, A2, A3, A4, A5, A6, A7, A8, A9, A10
> {
  return {
    strings,
    arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10
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
