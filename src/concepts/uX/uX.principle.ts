import { Subscriber } from 'rxjs';
import {
  Action,
  Concepts,
  PrincipleFunction,
  UnifiedSubject,
  axiumRegisterStagePlanner,
  createStage,
  getAxiumState,
  selectUnifiedState,
  stageWaitForOpenThenIterate,
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
  // There always needs to be atleast one subscriber or plan for the Axium to be active.
  const plan = concepts$.plan('uX Plan', [
    // This will register this plan to the axium, this allows for the axium to close or remove your concept cleanly.
    stageWaitForOpenThenIterate(() => (axiumRegisterStagePlanner({conceptName: uXName, stagePlanner: plan}))),
    createStage((concepts, dispatch) => {
      const state = selectUnifiedState<UXState>(concepts, semaphore);
      if (state) {
        dispatch(strategyBegin(uXSomeStrategy()), {
          iterateStage: true
        });
      }
    }, {beat: 30}),
    createStage((concepts) => {
      const {lastStrategy} = getAxiumState(concepts);
      if (lastStrategy === uXSomeStrategyTopic) {
        plan.conclude();
      }
    })
  ]);
};