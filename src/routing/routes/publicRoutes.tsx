import { RouteObject } from "react-router-dom";
import React from "react";
import Home from "../../pages/public/Home/Home";

export const defaultPublicPath = '/';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Home/>
    ),
  },
]