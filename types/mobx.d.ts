import React from 'react';
import { inject, IWrappedComponent } from 'mobx-react';
import {  Omit } from '../src/types';
import { stores } from '../src/index';

declare module "mobx-react" {
  export function inject<D>(
    mapStoreToProps: (store: ReturnType<typeof stores>) => D
  ): <A extends D>(
    component: React.ComponentType<A> | React.SFC<A>
  ) => React.SFC<Omit<A, keyof D> & Partial<D>> & IWrappedComponent<A>;
}