import type { RouteObject } from "react-router";
import UserLayout from "@shared/layouts/user-layout";

export const airtimeRouter: RouteObject[] = [
  {
    path: "create",

    lazy: async () => {
      const { default: Component } = await import("./pages/create");
      return { Component };
    },
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "airtime-purchase",
        lazy: async () => {
          const { default: Component } = await import("./pages/purchase");
          return { Component };
        },
      },
    ],
  },
];
