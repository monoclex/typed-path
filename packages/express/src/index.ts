import { path, QueryParam, RouteOrQueryParam, RouteParam, RoutePartType, string, TypedRoute } from '@typed-path/core';
import { RequestHandler } from 'express';

type ExtractRouteParamGeneric<Type> = Type extends RoutePartType<infer X> ? X : never

export type TypedRouteAsParams<
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
> =
  { [K in keyof Omit<A1, "?">]: ExtractRouteParamGeneric<A1[K]> }
  & { [K in keyof Omit<A2, "?">]: ExtractRouteParamGeneric<A2[K]> }
  & { [K in keyof Omit<A3, "?">]: ExtractRouteParamGeneric<A3[K]> }
  & { [K in keyof Omit<A4, "?">]: ExtractRouteParamGeneric<A4[K]> }
  & { [K in keyof Omit<A5, "?">]: ExtractRouteParamGeneric<A5[K]> }
  & { [K in keyof Omit<A6, "?">]: ExtractRouteParamGeneric<A6[K]> }
  & { [K in keyof Omit<A7, "?">]: ExtractRouteParamGeneric<A7[K]> }
  & { [K in keyof Omit<A8, "?">]: ExtractRouteParamGeneric<A8[K]> }
  & { [K in keyof Omit<A9, "?">]: ExtractRouteParamGeneric<A9[K]> }
  & { [K in keyof Omit<A10, "?">]: ExtractRouteParamGeneric<A10[K]> };

export type TakeQueryFields<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,

  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
  Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>, Q9 extends RouteParam<T9>, Q10 extends RouteParam<T10>,

  A extends RouteOrQueryParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10>
> = A extends QueryParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10> ? (
  & { [K in keyof A["?"][0]]: ExtractRouteParamGeneric<A["?"][0][K]> }
  & { [K in keyof A["?"][1]]: ExtractRouteParamGeneric<A["?"][1][K]> }
  & { [K in keyof A["?"][2]]: ExtractRouteParamGeneric<A["?"][2][K]> }
  & { [K in keyof A["?"][3]]: ExtractRouteParamGeneric<A["?"][3][K]> }
  & { [K in keyof A["?"][4]]: ExtractRouteParamGeneric<A["?"][4][K]> }
  & { [K in keyof A["?"][5]]: ExtractRouteParamGeneric<A["?"][5][K]> }
  & { [K in keyof A["?"][6]]: ExtractRouteParamGeneric<A["?"][6][K]> }
  & { [K in keyof A["?"][7]]: ExtractRouteParamGeneric<A["?"][7][K]> }
  & { [K in keyof A["?"][8]]: ExtractRouteParamGeneric<A["?"][8][K]> }
  & { [K in keyof A["?"][9]]: ExtractRouteParamGeneric<A["?"][9][K]> }
) : unknown;

export type TypedRouteAsQuery<
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
> =
& TakeQueryFields<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, A1>
& TakeQueryFields<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, A2>
& TakeQueryFields<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, A3>
& TakeQueryFields<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, A4>
& TakeQueryFields<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, A5>
& TakeQueryFields<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, A6>
& TakeQueryFields<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, A7>
& TakeQueryFields<T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, A8>
& TakeQueryFields<T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, A9>
& TakeQueryFields<T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, A10>;

export function get<
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

ResBody = any, ReqBody = any,
>(
  app: Express.Application,
  path: TypedRoute<
    T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,
    Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19,
    A1, A2, A3, A4, A5, A6, A7, A8, A9, A10
  >,
  //@ts-ignore
  ...handlers: RequestHandler<
    TypedRouteAsParams<
      T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,
      Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19,
      A1, A2, A3, A4, A5, A6, A7, A8, A9, A10
    >,
    ResBody,
    ReqBody,
    TypedRouteAsQuery<
      T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19,
      Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19,
      A1, A2, A3, A4, A5, A6, A7, A8, A9, A10
    >
  >[]
): void;

export function get(app: import('express').Application, ...args: unknown[]): void {
  //@ts-ignore
  app.get(...args);
}

function what(app: Express.Application) {
  get(app, path`/here/${{today: string}}?${{"?": [{cool: string}]}})`, (req, res) => {
    
  });
}