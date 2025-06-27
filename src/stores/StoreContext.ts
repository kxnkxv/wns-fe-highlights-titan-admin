'use client';

import { createContext, useContext } from 'react';

import { RootStore, rootStore } from '@wns/stores/RootStore';

const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
