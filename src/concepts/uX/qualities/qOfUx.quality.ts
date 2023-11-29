import {
  MethodCreator,
  Action,
  prepareActionCreator,
  createQuality,
  UnifiedSubject,
  createMethodWithState,
  strategySuccess,
  strategyData_unifyData,
  strategyFailed
} from 'stratimux';
import { UXState } from '../uX.concept';

export const uXqOfUXType = 'uX allows for easy selection of your qualities, qOfUX is your quality, and Type is the distinction';
export const uXqOfUX = prepareActionCreator(uXqOfUXType);
export type uXqOfUxField = {
  state: UXState
};

function getRandomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const uXqOfUXCreator: MethodCreator = (concepts$?: UnifiedSubject, semaphore?: number) =>
  // Only if you need to access state, otherwise
  createMethodWithState<UXState>((action, state) => {
    if (action.strategy) {
      // P/NP?
      const even = Math.round(getRandomRange(1, 5)) % 2;
      if (even) {
        const strategy = strategySuccess(action.strategy, strategyData_unifyData(action.strategy, {
          state
        }));
        return strategy;
      } else {
        const strategy = strategyFailed(action.strategy);
        return strategy;
      }
    }
    return action;
  }, concepts$ as UnifiedSubject, semaphore as number);

function uXqOfUXReducer(state: UXState, _: Action): UXState {
  return {
    ...state,
  };
}

export const uXqOfUXQuality = createQuality(
  uXqOfUXType,
  uXqOfUXReducer,
  uXqOfUXCreator
);
/* Below are the default functions available for your quality */
// export const qOfUXQuality = createQuality(
//   qOfUXType,
//   defaultReducer,
// The method is optional and is an advanced behavior
//   defaultMethodCreator
// );