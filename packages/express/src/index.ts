import { path, QueryParam, RouteOrQueryParam, RouteParam, RoutePartType, string, TypedRoute } from '@typed-path/core';
import { RequestHandler } from 'express';

type ExtractRouteParamGeneric<Type> = Type extends RoutePartType<infer X> ? X : never

type TupleFour<A, B, C, D> = [A?, B?, C?, D?];

type Total = { "?": [{a: string}, {b: number}, {c: boolean}] }
type Tuple = Total["?"];
type TupleFr = TupleFour<{a: string}, {b: number}, {c: boolean}, never>;
type All = TupleFr[0] & TupleFr[1] & TupleFr[2] & TupleFr[3];
type Map = { [K in keyof All]: All[K] };

export type TypedRouteAsParams<
T1, T2, T3, T4, T5, T6, T7, T8,

Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>,

A1 extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>,
A2 extends RouteOrQueryParam<T2, T3, T4, T5, Q2, Q3, Q4, Q5>,
A3 extends RouteOrQueryParam<T3, T4, T5, T6, Q3, Q4, Q5, Q6>,
A4 extends RouteOrQueryParam<T4, T5, T6, T7, Q4, Q5, Q6, Q7>,
A5 extends RouteOrQueryParam<T5, T6, T7, T8, Q5, Q6, Q7, Q8>,
> =
  { [K in keyof Omit<A1, "?">]: ExtractRouteParamGeneric<A1[K]> }
  & { [K in keyof Omit<A2, "?">]: ExtractRouteParamGeneric<A2[K]> }
  & { [K in keyof Omit<A3, "?">]: ExtractRouteParamGeneric<A3[K]> }
  & { [K in keyof Omit<A4, "?">]: ExtractRouteParamGeneric<A4[K]> }
  & { [K in keyof Omit<A5, "?">]: ExtractRouteParamGeneric<A5[K]> };

export type TakeQueryFields<
  T1, T2, T3, T4,

  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,

  A extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>
> = A extends QueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4> ? (
  & { [K in keyof A["?"][0]]: ExtractRouteParamGeneric<A["?"][0][K]> }
  & { [K in keyof A["?"][1]]: ExtractRouteParamGeneric<A["?"][1][K]> }
  & { [K in keyof A["?"][2]]: ExtractRouteParamGeneric<A["?"][2][K]> }
  & { [K in keyof A["?"][3]]: ExtractRouteParamGeneric<A["?"][3][K]> }
) : unknown;

export type TypedRouteAsQuery<
T1, T2, T3, T4, T5, T6, T7, T8,

Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>,

A1 extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>,
A2 extends RouteOrQueryParam<T2, T3, T4, T5, Q2, Q3, Q4, Q5>,
A3 extends RouteOrQueryParam<T3, T4, T5, T6, Q3, Q4, Q5, Q6>,
A4 extends RouteOrQueryParam<T4, T5, T6, T7, Q4, Q5, Q6, Q7>,
A5 extends RouteOrQueryParam<T5, T6, T7, T8, Q5, Q6, Q7, Q8>,
> =
& TakeQueryFields<T1, T2, T3, T4, Q1, Q2, Q3, Q4, A1>
& TakeQueryFields<T2, T3, T4, T5, Q2, Q3, Q4, Q5, A2>
& TakeQueryFields<T3, T4, T5, T6, Q3, Q4, Q5, Q6, A3>
& TakeQueryFields<T4, T5, T6, T7, Q4, Q5, Q6, Q7, A4>
& TakeQueryFields<T5, T6, T7, T8, Q5, Q6, Q7, Q8, A5>;

export function get<
T1, T2, T3, T4, T5, T6, T7, T8,

Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>, Q5 extends RouteParam<T5>,
Q6 extends RouteParam<T6>, Q7 extends RouteParam<T7>, Q8 extends RouteParam<T8>,

A1 extends RouteOrQueryParam<T1, T2, T3, T4, Q1, Q2, Q3, Q4>,
A2 extends RouteOrQueryParam<T2, T3, T4, T5, Q2, Q3, Q4, Q5>,
A3 extends RouteOrQueryParam<T3, T4, T5, T6, Q3, Q4, Q5, Q6>,
A4 extends RouteOrQueryParam<T4, T5, T6, T7, Q4, Q5, Q6, Q7>,
A5 extends RouteOrQueryParam<T5, T6, T7, T8, Q5, Q6, Q7, Q8>,

ResBody = any, ReqBody = any,
>(
  app: Express.Application,
  path: TypedRoute<T1, T2, T3, T4, T5, T6, T7, T8, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, A1, A2, A3, A4, A5>,
  //@ts-ignore
  ...handlers: RequestHandler<
    TypedRouteAsParams<T1, T2, T3, T4, T5, T6, T7, T8, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, A1, A2, A3, A4, A5>,
    ResBody,
    ReqBody,
    TypedRouteAsQuery<T1, T2, T3, T4, T5, T6, T7, T8, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, A1, A2, A3, A4, A5>
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