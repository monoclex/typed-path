import { path, QueryParam, RouteParam, RoutePartType, string, TypedRoute } from '@typed-path/core';
import { RequestHandler } from 'express';

type ExtractRouteParamGeneric<Type> = Type extends RoutePartType<infer X> ? X : never

type TupleFour<A, B, C, D> = [A?, B?, C?, D?];

type Total = { "?": [{a: string}, {b: number}, {c: boolean}] }
type Tuple = Total["?"];
type TupleFr = TupleFour<{a: string}, {b: number}, {c: boolean}, never>;
type All = TupleFr[0] & TupleFr[1] & TupleFr[2] & TupleFr[3];
type Map = { [K in keyof All]: All[K] };

export type TypedRouteAsParams<
  T1, T2, T3, T4,
  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,
  A1 extends RouteParam<T1> | QueryParam<T1, T2, T3, Q1, Q2, Q3>,
  A2 extends RouteParam<T2> | QueryParam<T2, T3, T4, Q2, Q3, Q4>
> =
  { [K in keyof Omit<A1, "?">]: ExtractRouteParamGeneric<A1[K]> }
  & { [K in keyof Omit<A2, "?">]: ExtractRouteParamGeneric<A2[K]> };

type CombineQueryParam<QParam extends QueryParam<T1, T2, T3, Q1, Q2, Q3>, T1, T2, T3, Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>>
  = QParam["?"][0] & QParam["?"][1] & QParam["?"][2];

export type TypedRouteAsQuery<
T1, T2, T3, T4,
Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,
A1 extends RouteParam<T1> | QueryParam<T1, T2, T3, Q1, Q2, Q3>,
A2 extends RouteParam<T2> | QueryParam<T2, T3, T4, Q2, Q3, Q4>
> =
& (A1 extends QueryParam<T1, T2, T3, Q1, Q2, Q3> ? (
  & { [K in keyof (A1["?"][0])]: ExtractRouteParamGeneric<(A1["?"][0])[K]> }
  & { [K in keyof (A1["?"][1])]: ExtractRouteParamGeneric<(A1["?"][1])[K]> }
  & { [K in keyof (A1["?"][2])]: ExtractRouteParamGeneric<(A1["?"][2])[K]> }
) : unknown)
& (A2 extends QueryParam<T2, T3, T4, Q2, Q3, Q4> ? (
  & { [K in keyof (A2["?"][0])]: ExtractRouteParamGeneric<(A2["?"][0])[K]> }
  & { [K in keyof (A2["?"][1])]: ExtractRouteParamGeneric<(A2["?"][1])[K]> }
  & { [K in keyof (A2["?"][2])]: ExtractRouteParamGeneric<(A2["?"][2])[K]> }
) : unknown);

type Debug = TypedRouteAsQuery<
  string, string, unknown, unknown,
  RouteParam<string>, RouteParam<string>, RouteParam<unknown>, RouteParam<unknown>,
  {cool: RoutePartType<string>},
  {"?":[{today: RoutePartType<string>}]}
>;

type Hmm<T, U, V> = [T?, U?, V?];
type Fill = Hmm<boolean, unknown, unknown>;
type K = Fill[0] & Fill[1] & Fill[2];

type Pp2 = {"?":[{today: RoutePartType<string>}]};
type Pp = {"?": Hmm<Pp2["?"][0], unknown, unknown>};

type Debug2 = { [K in keyof CombineQueryParam<{"?":[{today: RoutePartType<string>}]}, string, unknown, unknown, RouteParam<string>, RouteParam<unknown>, RouteParam<unknown>>]: string };
type Debug3 = { [K in keyof Pp["?"][0] & Pp["?"][1] & Pp["?"][2]]: string };

export function get<
  T1, T2, T3, T4,
  Q1 extends RouteParam<T1>, Q2 extends RouteParam<T2>, Q3 extends RouteParam<T3>, Q4 extends RouteParam<T4>,
  A1 extends RouteParam<T1> | QueryParam<T1, T2, T3, Q1, Q2, Q3>,
  A2 extends RouteParam<T2> | QueryParam<T2, T3, T4, Q2, Q3, Q4>,
  ResBody = any, ReqBody = any
>(
  app: Express.Application,
  path: TypedRoute<T1, T2, T3, T4, Q1, Q2, Q3, Q4, A1, A2>,
  //@ts-ignore
  ...handlers: RequestHandler<TypedRouteAsParams<T1, T2, T3, T4, Q1, Q2, Q3, Q4, A1, A2>, ResBody, ReqBody, TypedRouteAsQuery<T1, T2, T3, T4, Q1, Q2, Q3, Q4, A1, A2>>[]
): void;

export function get(app: import('express').Application, ...args: unknown[]): void {
  //@ts-ignore
  app.get(...args);
}

function what(app: Express.Application) {
  get(app, path`/here/${{today: string}}?${{"?": [{cool: string}]}})`, (req, res) => {
    
  });
}