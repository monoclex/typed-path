import { RoutePartType } from "./TypedRoute";

export const string: RoutePartType<string> = {
  verify: (input): string | undefined => {
    if (typeof input === "string") {
      return input;
    }

    if (typeof input === "number") {
      return input.toString();
    }

    return undefined;
  }
};

export const number: RoutePartType<number> = {
  verify: (input): number | undefined => {
    if (typeof input === "number") {
      return input;
    }

    if (typeof input === "string") {
      const parseResult = parseInt(input);

      if (parseResult === NaN) {
        // if it couldn't parse the string, don't verify the string
        return undefined;
      }

      return parseResult;
    }

    return undefined;
  }
};

export const boolean: RoutePartType<boolean> = {
  verify: (input): boolean | undefined => {
    if (typeof input === "boolean") {
      return input;
    }

    if (input === 0 || input === 1) {
      return !!input;
    }

    return undefined;
  }
}
