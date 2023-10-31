# STRATIMUX STARTER TEMPLATE
For more examples: [https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts](https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts)
Reminder, this is a research project and while in a appropriate beta state. Some of this is bound to change, especially with the addition of more helper functions.
### Project Structure
```
src/ index.ts
src/ concepts / uX / qualities / qOfUX.quality.ts
     concepts / uX / strategies / sOfUX.strategy.ts
     concepts / uX / uX.concept.ts
     concepts / uX / uX.principle.ts
```

### uX.concept.ts
```typescript
import { Action, Mode, Quality, createConcept, PrincipleFunction } from 'stratimux';

export type UXState = {
  //
}

export const uXName = 'uX';

export const createUXState = (): ExperimentState => {
  return {
    //
  };
};

export const createUXConcept = (
  state: Record<string, unknown>,
  qualities?: Quality[],
  principles?: PrincipleFunction[],
  mode?: Mode[]) => {
  return createConcept(
    uXName,
    state,
    qualities,
    principles,
    mode
  );
};
```



```typescript
import { MethodCreator, Action, prepareActionCreator, createQuality, UnifiedSubject, createMethodWithState, strategySuccess } from '../../../model/concept';

export type uXqOfUXType = 'uX allows for easy selection of your qualities, qOfUX is your quality, and Type is the distinction';
export const uXqOfUX = prepareActionCreator(uXqOfUXType);

const qOfUXCreator: MethodCreator = (concepts$?: UnifiedSubject, semaphore?: number) =>
  // Only if you need to access state, otherwise
  createMethodWithState<ExperimentState>((action, state) => {
    if (action.strategy) {
      const strategy = strategySuccess(action.strategy);
      return strategy;
    }
    return action;
  }, concepts$ as UnifiedSubject, semaphore as number);

function qOfUXReducer(state: ExperimentState, _: Action): ExperimentState {
  return {
    ...state,
  };
}

export const uXqOfUXQuality = createQuality(
  qOfUXType,
  qOfUXReducer,
  qOfUXCreator
);
/* Below are the default functions available for your quality */
// export const qOfUXQuality = createQuality(
//   qOfUXType,
//   defaultReducer,
//   defaultMethodCreator
// );
```

```typescript
import { ActionStrategy, ActionStrategyParameters, createActionNode, createStrategy } from 'stratimux';
import { axiumLog, axiumKick } from 'stratimux';
import { uXqOfUX } from '../qualities/qOfUX.quality';

export const uXsOfUXTopic = 'uX is your concept for ease of selection via autofill, sOfUX is your strategy\'s name, and the topic is a method of identification of your strategy.';
export function uXsOfUX(): ActionStrategy {
  const stepTwo = createActionNode(axiumKick(), {
    successNode: stepThree,
    failureNode: null,
  });
  const stepTwo = createActionNode(axiumLog(), {
    successNode: stepThree,
    failureNode: null,
  });
  const stepOne = createActionNode(uXqOfUX(), {
    successNode: stepTwo,
    failureNode: null,
  });

  const params: ActionStrategyParameters = {
    topic: uXsOfUXTopic,
    initialNode: stepOne,
  };

  return createStrategy(params);
}
```

### uX.principle.ts
Your concepts "main" function. This will be called after the axium initializes. 
* observer - Using observer.next(someAction) will directly emit that action into the axium's action stream.
* _concepts - Is the initial load of concepts when your principle is initialized
* concepts$- Is the UnifiedSubject that controls the halting quality of Stratimux and informs principles, methods, and any general subscriber of state changes.
* semaphore - This identifies the placement of your concept in the axium's conceptual set. This is used to determine if your concept is loaded and access state via the selectUnifiedState function.

```typescript
import { Subscriber } from 'rxjs';
import { Action, Concepts, PrincipleFunction, UnifiedSubject, registerPrincipleSubscription, selectUnifiedState } from '../../model/concept';
import { UXSTATE, uXName } from './uX.concept';

export const chainPrinciple: PrincipleFunction = (
  observer: Subscriber<Action>,
  _concepts: Concepts,
  concepts$: UnifiedSubject,
  semaphore: number
) => {
  const plan = concepts$.stage('uX Plan', [
    (concepts, dispatch) => {
      // This will register this plan to the axium, this allows for the axium to close or remove your concept cleanly.
      dispatch(primeAction(concepts, axiumRegisterStagePlanner({conceptName: uXName, stagePlanner: plan})), {
        on: {
          selector: axiumSelectOpen,
          expected: true,
        },
        iterateStage: true
      });
    },
    (concepts, dispatch) => {
      const state = selectUnifiedState(concepts, semaphore);
      if (state) {
        //
      }
    }
  ]);
};

```