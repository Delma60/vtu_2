import type { RouteObject } from "react-router";

export const userRouter: RouteObject[] = [
  {
    path: "dashboard",

    lazy: async () => {
      const { default: Component } = await import("./pages/dashboard");
      return { Component };
    },
  },
];
