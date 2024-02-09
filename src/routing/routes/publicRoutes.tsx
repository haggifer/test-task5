import React from 'react';
import { RouteObject } from 'react-router-dom';
import Files from '../../pages/public/Files/Files';

export const defaultPublicPath = '/';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Files />,
  },
];
