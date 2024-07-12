// Manage the state of the application.
// The state is a single object that contains all the data of the application.
// The state is immutable. It can only be changed by dispatching actions.
// The state is updated by the reducer function.
// The state can be accessed by the components of the application.

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
  decrementAsync: () => Promise<void>;
};

// use keyword is used to create a react hook.
export const useCounterStore = create<CounterStore>((set) => ({
  // The initial state of the store.
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  decrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count - 1 }));
  },
}));
