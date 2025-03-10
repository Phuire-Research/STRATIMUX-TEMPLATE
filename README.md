![Stratimux](https://github.com/Phuire-Research/Stratimux/blob/main/Stratimux.png?raw=true)
# STARTER TEMPLATE
```bash
npm i
```
*Note if tsconfig.json is giving a type error for jest, be sure to open jest config after your **npm i***

### For more examples: 
 * [https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts](https://github.com/Phuire-Research/Stratimux/tree/main/src/concepts)

### Advice when encountering branch prediction errors.
The easiest means of detecting if your application is starting to encounter such errors is to enable the dialog and logging options on your Muxium. To avoid running into these branch prediction errors. Attempt to limit your strategy assembly, qualities, and plans to be less than O(n^3). You will find that your functions will suddenly become probabilistic in their ability execution deterministically.

Thankfully, this is the reason for the atomic behavior of your qualities combined with strategies and plans. As you may shrink time complexity into a series of steps. Or better yet, if you are relying on accessing some parameters from your state. Be sure to flattened those data structures into something that can readily be accessed.

When in doubt simplify.

### Concept Index
* [Action Strategy](https://github.com/Phuire-Research/Stratimux/blob/main/ActionStrategy.md) - Data structure that allows for Stratimux to be provably terminating.
* [Muxium](https://github.com/Phuire-Research/Stratimux/blob/main/Muxium.md) - Governing concept that contains the set of concepts that formalizes each muxium.
* [Concept](https://github.com/Phuire-Research/Stratimux/blob/main/Concept.md) - Concepts are composed of state, qualities, principles, and mode.
* [Stage Planner](https://github.com/Phuire-Research/Stratimux/blob/main/StagePlanner.md) - Slices your application into different stages and prevents action overflows. 
* [Action Controller](https://github.com/Phuire-Research/Stratimux/blob/main/ActionController.md) - Allows methods to be performed asynchronously.
* [Strategy Data](https://github.com/Phuire-Research/Stratimux/blob/main/StrategyData.md) - Enables the Action Strategy pattern to perform as a "Universal Transformer." 
* [Data Oriented Functional Inheritance](https://github.com/Phuire-Research/Stratimux/blob/main/DataOrientedFunctionalInheritance.md) - Demonstrates "Unification of Concepts," as a method of functional inheritance.
* [Spatial Ownership](https://github.com/Phuire-Research/Stratimux/blob/main/SpatialOwnership.md) - A single lock concept that can be within a single process or network of muxiums.

### Want to learn more?
* [PURF - White Paper](https://github.com/Phuire-Research/PURF) - Safe Recursive Improvement of AI
* [The Impossible Halting Turing Machine](https://github.com/Phuire-Research/Stratimux/blob/main/Index.md) - Original Paper for Stratimux
* [Unified Turing Machine](https://github.com/Phuire-Research/Stratimux/blob/main/The-Unified-Turing-Machine.md) - The governing concept for this entire framework.:|

## Change Log ![Tests](https://github.com/Phuire-Research/Stratimux/actions/workflows/node.js.yml/badge
### QoL 0.2.48
* Exported both the Stage and PartialStaging Types for Algorithmic Stage Generation.
### Strategy Determine 0.2.47
* Ensured that the Strategy Determine helper function is working as intended. Noting it creates a single Action Strategy, this is used primarily in Methods to ensure Halting Completeness.
* Now accepts Any Action and no longer requires an options object.
### Verbose Bad Actions 0.2.46
* The Muxium Bad Action Quality is now being utilized and setting the muxium's bad action property as intended.
### Restored Dialog Functionality 0.2.44
* Moved the handling of the decision action node notes to the consumer function itself.
### QoL 0.2.42
* Broke up complex files into distinguishable parts
* Hooked in deck functionality into method creators properly
* muxium_createStitchNode now requires a deck load
* Renamed muxificationConcept to muxiumConcept
### Stratimux 0.2.0-1 Stealth Roll Out
* Introduces type safety throughout your muxiums via a new DECK Interface System
  * e: Entry Action
  * c: Comparators, uses semaphores to ensure a stringless comparison
  * k: Constants, allows you to select individual properties, make new selectors, get the entire state, etc...
* Override + Hard Override - Will wipe out current actions within the Muxiums Action Que System


```bash
npm i stratimux
```

To work with this project template.
```bash
npm i --force
npm run start
```

### Project Structure
```
src/ index.ts
src/ concepts / muX / qualities / qOfMux.quality.ts
     concepts / muX / strategies / muXSome.strategy.ts
     concepts / muX / muX.concept.ts
     concepts / muX / muX.principle.ts
     tests / example.test.ts
```

### muX.concept.ts
Treat your concepts as libraries, modules, and/or(anor) entire applications. As that was the initial inspiration for this system. Beyond this initial release, there will be a growing library of Standardized Concepts for utilization within your Muxiums. Including the ability to finally have an easy means of composing "Web Components," into your system. While enhancing upon their functionality, versus just the drop in. 

```typescript
import { Concept, createConcept, MuxiumDeck, PrincipleFunction } from 'stratimux';
import { muXqOfMux } from './qualities/qOfMux.quality';
import { muXPrinciple } from './muX.principle';

export type MUXState = {
  message: string
}

export const muXName = 'muX';

export const createMUXState = (): MUXState => {
  return {
    message: 'Hello World!'
  };
};

const qualities = {
  muXqOfMux
};

export type MUXDeck = {
  muX: Concept<MUXState, typeof qualities>;
};

export type MUXPrinciple = PrincipleFunction<typeof qualities, MuxiumDeck & MUXDeck, MUXState>;

export const createMuXConcept = () => {
  return createConcept(
    muXName,
    createMUXState(),
    {
      muXqOfMux
    },
    [
      muXPrinciple,
    ],
  );
};
```
### muuXqOfMux.quality.ts
This isolates all the parts necessary for your actions to have impact within this system. Types are a qualitative description of the overall quality. As even though they are not explicitly used within this system. They likewise better inform training data, and likewise act as unique identifiers if you are accessing the action creators directly versus the DECK System.

Internally Stratimux uses semaphores as the method of quality routing within the Muxium. This is to reduce the time complexity of each look up. To further increase the speed of execution of your applications, utilize the supplied DECK Interfaces at each point of entry.
```typescript
import {
  createMethodWithState,
  strategySuccess,
  strategyFailed,
  createQualityCardWithPayload,
  strategyData_muxifyData
} from 'stratimux';
import { MUXDeck, MUXState, } from '../muX.concept';

type muXOfMuxPayload = {
  message: string
}
export type uXqOfUxField = {
  state: MUXState
};

function getRandomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const muXqOfMux = createQualityCardWithPayload<MUXState, muXOfMuxPayload, MUXDeck>({
  type: 'muX allows for easy selection of your qualities, muXqOfMux is your quality, and Type is the distinction',
  reducer: (_, action) => {
    const {message} = action.payload;
    return {
      message
    };
  },
  methodCreator: () => createMethodWithState(({action, state}) => {
    if (action.strategy) {
      // P/NP?
      const even = Math.round(getRandomRange(1, 5)) % 2;
      if (even) {
        const strategy = strategySuccess(action.strategy, strategyData_muxifyData(action.strategy, {
          state
        }));
        return strategy;
      } else {
        const strategy = strategyFailed(action.strategy);
        return strategy;
      }
    }
    return action;
  })
});
/* Below are the default functions available for your quality */
// export const qOfUXQuality = createQuality(
//   qOfUXType,
//   defaultReducer,
// The method is optional and is an advanced behavior
//   defaultMethodCreator
// );
```

### muX.principle.ts
Your concept's "main" function. This will be called after the muxium initializes. 

```typescript
import {
  getMuxiumState,
  strategyBegin
} from 'stratimux';
import { muXName, MUXPrinciple } from './muX.concept';
import { muXSomeStrategy, muXSomeStrategyTopic } from './strategies/muXSome.strategy';

export const muXPrinciple: MUXPrinciple = ({
  plan
}) => {
  // There always needs to be atleast one subscriber or plan for the Muxium to be active.
  const muxPlan = plan('muX Plan', ({stageO, stage, d__}) => [
    // This will register this plan to the muxium, this allows for the muxium to close or remove your concept cleanly.
    stageO(() => (d__.muxium.e.muxiumRegisterStagePlanner({conceptName: muXName, stagePlanner: muxPlan}))),
    stage(({concepts, dispatch, k, d}) => {
      const state = k.state(concepts);
      if (state) {
        dispatch(strategyBegin(muXSomeStrategy(d)), {
          iterateStage: true
        });
      }
    }, {beat: 30}),
    stage(({concepts, stagePlanner}) => {
      const {lastStrategy} = getMuxiumState(concepts);
      if (lastStrategy === muXSomeStrategyTopic) {
        stagePlanner.conclude();
      }
    })
  ]);
};
```

### muXSome.strategy.ts
When you are creating your strategies within this system of design. You are optimizing towards success, and majority of your strategies should be taking place within that mind set. Failure is just a chance to get back on track and see the end of some strategy, but likewise you have to account for that failure ahead of time.

This approach to algorithm design is the core strength of Stratimux, but likewise its weakness due to branch prediction. Therefore be mindful if your strategies behave in unexpected ways. The Stage Planner paradigm, especially the beat attribute should be your first go to. As chances are your logic is becoming to complex and you need to tone down when parts of your application are notified changes to state.
```typescript
import { ActionStrategy, createActionNode, createStrategy, Deck, MuxiumDeck } from 'stratimux';
import { MUXDeck } from '../muX.concept';

export const muXSomeStrategyTopic = 'muX Some Error Correcting Strategy';
export const muXSomeStrategy = (d: Deck<MuxiumDeck & MUXDeck>): ActionStrategy => {
  const stepSuccess = createActionNode(d.muxium.e.muxiumLog());
  const stepFailure = createActionNode(d.muxium.e.muxiumKick(), {
    successNode: stepSuccess,
  });
  const stepBegin = createActionNode(d.muX.e.muXqOfMux({
    message: 'Muxification Hello World'
  }), {
    successNode: stepSuccess,
    failureNode: stepFailure
  });
  return createStrategy({
    topic: muXSomeStrategyTopic,
    initialNode: stepBegin
  });
};
```

### index.ts
Notice that beyond creating the muxium, there is no need for additional input. As the muxium is a recursive function. Your concepts are initialized internally via the principle that you have assigned to your concept. Note that you may still subscribe, stage, and dispatch actions into an muxium.
```typescript
import { muxification } from 'stratimux';
import { createMuXConcept } from './concepts/muX/muX.concept';

(() => {
  const muxiumName = 'Your Muxium';
  // Sets logging to true and store dialog to true
  //  This will log to the console the dialog of each successive ActionStrategy
  //  And store the entire application context in the muxium's dialog.
  muxification(muxiumName, {muX: createMuXConcept()}, {logging: true, storeDialog: true});
})();
```