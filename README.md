![Stratimux](https://github.com/Phuire-Research/Stratimux/blob/main/Stratimux.png?raw=true)
# STARTER TEMPLATE
```bash
npm i
```
*Note if tsconfig.json is giving a type error for jest, be sure to open jest config after your **npm i***

### For more examples: 
 * [https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts](https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts)
 * [https://github.com/Phuire-Research/logixUX/tree/main/server/src/concepts](https://github.com/Phuire-Research/logixUX/tree/main/server/src/concepts)

### Advice when encountering branch prediction errors.
The easiest means of detecting if your application is starting to encounter such errors is to enable the dialog and logging options on your Axium. To avoid running into these branch prediction errors. Attempt to limit your strategy assembly, qualities, and plans to be less than O(n^3). You will find that your functions will suddenly become probabilistic in their ability execution deterministically.

Thankfully, this is the reason for the atomic behavior of your qualities combined with strategies and plans. As you may shrink time complexity into a series of steps. Or better yet, if you are relying on accessing some parameters from your state. Be sure to flattened those data structures into something that can readily be accessed.

When in doubt simplify.

### Concept Index
* [Action Strategy](https://github.com/Phuire-Research/Stratimux/blob/main/ActionStrategy.md) - Data structure that allows for Stratimux to be provably terminating.
* [Axium](https://github.com/Phuire-Research/Stratimux/blob/main/Axium.md) - Governing concept that contains the set of concepts that formalizes each axium.
* [Concept](https://github.com/Phuire-Research/Stratimux/blob/main/Concept.md) - Concepts are composed of state, qualities, principles, and mode.
* [Stage Planner](https://github.com/Phuire-Research/Stratimux/blob/main/StagePlanner.md) - Slices your application into different stages and prevents action overflows. 
* [Action Controller](https://github.com/Phuire-Research/Stratimux/blob/main/ActionController.md) - Allows methods to be performed asynchronously.
* [Strategy Data](https://github.com/Phuire-Research/Stratimux/blob/main/StrategyData.md) - Enables the Action Strategy pattern to perform as a "Universal Transformer." 
* [Data Oriented Functional Inheritance](https://github.com/Phuire-Research/Stratimux/blob/main/DataOrientedFunctionalInheritance.md) - Demonstrates "Unification of Concepts," as a method of functional inheritance.
* [Spatial Ownership](https://github.com/Phuire-Research/Stratimux/blob/main/SpatialOwnership.md) - A single lock concept that can be within a single process or network of axiums.

### Want to learn more?
* [PURF - White Paper](https://github.com/Phuire-Research/PURF) - Safe Recursive Improvement of AI
* [The Impossible Halting Turing Machine](https://github.com/Phuire-Research/Stratimux/blob/main/Index.md) - Original Paper for Stratimux
* [Unified Turing Machine](https://github.com/Phuire-Research/Stratimux/blob/main/The-Unified-Turing-Machine.md) - The governing concept for this entire framework.:

### 12/14/23
* Set Stage can now properly be set to 0.
### 11/29/23
* Official Release
* Stage Planner Beat - No longer experimental, have fun! It's Stratimux is now a dancing algorithm recursive function.
### 11/27/23
* Added a new experimental parameter to staging. Beat, which is a duration that will "Throttle and debounce," state notifications to that specific plan.
### 11/26/23
* Updated naming conventions throughout. Counter is now CounterState. Strategies now export with their associated concept's prepended.
* Added parsing tokens. If curious about this functionality see the logixUX project. These tokens in combination with that project will upon its release. Allow for the ease of parsing Stratimux or other TypeScript projects into high quality training data.
### 11/17/23
* selectSlice now performing deep selections.
### 11/15/23
* Action Payloads must extend type: Record<string, unknown>  
   * This change is to provide a guarantee of advanced functionality in the current UI Proof of Concept.

### Project Structure
```
src/ index.ts
src/ concepts / uX / qualities / qOfUX.quality.ts
     concepts / uX / strategies / uXSome.strategy.ts
     concepts / uX / uX.concept.ts
     concepts / uX / uX.principle.ts
     tests / uX.test.ts
```

### uX.concept.ts
This paradigm affords for a powerful separation of concerns. And is the key feature that allows the User Interface concept that is currently in the processing of moving out of MVP. That affords for the easy isolation of client and server logic. With even the ease of handling server side rendering based on what concept your Brand is being unified with: server or client.

Treat your concepts as libraries and modules. As that was the initial inspiration for this system. Beyond this initial release, there will be a growing library of Standardized Concepts for utilization within your Axium. Including the ability to finally have an easy means of composing "Web Components," into your system. While enhancing upon their functionality, versus just the drop in. 
```typescript
import { Action, Mode, Quality, createConcept, PrincipleFunction } from 'stratimux';
import { uXqOfUXQuality } from './qualities/qOfUx.quality'
import { uXPrinciple } from './uX.principle'

export type UXState = {
  //
}

export const uXName = 'uX';

export const createUXState = (): UXState => {
  return {
    //
  };
};

// Pass any arguments needed for your concept
export const createUXConcept = (
//  state: Record<string, unknown>,
//  qualities?: Quality[],
//  principles?: PrincipleFunction[],
//  mode?: Mode[]
) => {
  return createConcept(
    uXName,
    createUXState(),
    [
      uXqOfUXQuality
    ],
    [
      uXPrinciple,
    ],
    mode
  );
};
```
### uXqOfUx.quality.ts
This isolates all the parts necessary for your actions to have impact within this system. Be mindful of your types, as even though they are not explicitly used within this system. They likewise better inform training data, and likewise act as unique identifiers if you are not setting the semaphore ahead of time.

The semaphore is the method of quality selection within the Axium. This is to reduce the time complexity of each look up. And if you applications are purely static with no planned dynamic changes to the Axium's conceptual load. This values can be hard coded ahead of time. This is one of the planned features for [logixUX](https://github.com/Phuire-Research/logixUX). In addition to other scaffolding improvements, AI assistance, and more.
### uXqOfUx.quality.ts
This isolates all the parts necessary for your actions to have impact within this system. Be mindful of your types, as even though they are not explicitly used within this system. They likewise better inform training data, and likewise act as unique identifiers if you are not setting the semaphore ahead of time.

The semaphore is the method of quality selection within the Axium. This is to reduce the time complexity of each look up. And if you applications are purely static with no planned dynamic changes to the Axium's conceptual load. This values can be hard coded ahead of time. This is one of the planned features for [logixUX](https://github.com/Phuire-Research/logixUX). In addition to other scaffolding improvements, AI assistance, and more.
```typescript
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
```

### uX.principle.ts
Your concept's "main" function. This will be called after the axium initializes. 
* observer - Using observer.next(someAction) will directly emit that action into the axium's action stream.
* _concepts - Is the initial load of concepts when your principle is initialized
* concepts$- Is the UnifiedSubject that controls the halting quality of Stratimux and informs principles, methods, and any general subscriber of state changes.
* semaphore - This identifies the placement of your concept in the axium's conceptual set. This is used to determine if your concept is loaded and access state via the selectUnifiedState function.

```typescript
import { Subscriber } from 'rxjs';
import {
  Action,
  Concepts,
  PrincipleFunction,
  UnifiedSubject,
  axiumRegisterStagePlanner,
  axiumSelectOpen,
  getAxiumState,
  primeAction,
  selectUnifiedState,
  strategyBegin
} from 'stratimux';
import { UXState, uXName } from './uX.concept';
import { uXSomeStrategy, uXSomeStrategyTopic } from './strategies/uXSome.strategy';

export const uXPrinciple: PrincipleFunction = (
  _obs: Subscriber<Action>,
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
      const state = selectUnifiedState<UXState>(concepts, semaphore);
      if (state) {
        dispatch(strategyBegin(uXSomeStrategy()), {
          iterateStage: true
        });
      }
    },
    (concepts) => {
      const {lastStrategy} = getAxiumState(concepts);
      if (lastStrategy === uXSomeStrategyTopic) {
        plan.conclude();
      }
    }
  // There always needs to be atleast one subscriber or plan for the Axium to be active.
  ], 30);
};
```

### uXSome.strategy.ts
When you are creating your strategies within this system of design. You are optimizing towards success, and majority of your strategies should be taking place within that mind set. Failure is just a chance to get back on track and see the end of some strategy, but likewise you have to account for that failure ahead of time.

This approach to algorithm design is the core strength of Stratimux, but likewise its weakness due to branch prediction. Therefore be mindful if your strategies behave in unexpected ways. The Stage Planner paradigm, especially the beat attribute should be your first go to. As chances are your logic is becoming to complex and you need to tone down when parts of your application are notified changes to state.
```typescript
import { ActionStrategy, axiumKick, axiumLog, createActionNode, createStrategy } from 'stratimux';
import { uXqOfUX } from '../qualities/qOfUx.quality';

export const uXSomeStrategyTopic = 'uX Some Error Correcting Strategy';
export const uXSomeStrategy = (): ActionStrategy => {
  const stepSuccess = createActionNode(axiumLog(), {
    successNode: null,
    failureNode: null
  });
  const stepFailure = createActionNode(axiumKick(), {
    successNode: stepSuccess,
    failureNode: null
  });
  const stepBegin = createActionNode(uXqOfUX(), {
    successNode: stepSuccess,
    failureNode: stepFailure
  });
  return createStrategy({
    topic: uXSomeStrategyTopic,
    initialNode: stepBegin
  });
};
```

### index.ts
Notice that beyond creating the axium, there is no need for additional input. As the axium is a recursive function. Your concepts are initialized internally via the principle that you have assigned to your concept. Note that you may still subscribe, stage, and dispatch actions into an axium.
```typescript
import { createAxium } from 'stratimux';
import { createUXConcept } from './concepts/uX/uX.concept';

(() => {
  const axiumName = 'Name of your axium';
  // Sets logging to true and store dialog to true
  //  This will log to the console the dialog of each successive ActionStrategy
  //  And store the entire application context in the axium's dialog.
  createAxium(axiumName, [createUXConcept()], true, true);
})();
```