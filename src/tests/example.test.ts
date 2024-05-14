import {
  AxiumState,
  CounterState,
  axiumKick,
  counterName,
  countingStrategy,
  countingTopic,
  createAxium,
  createCounterConcept,
  createStage,
  selectState,
  stageWaitForOpenThenIterate,
  strategyBegin
} from 'stratimux';

test('Axium Counting Strategy Test', (done) => {
  const axium = createAxium('axiumStrategyTest', [createCounterConcept()], { logging: true, storeDialog: true });
  const plan = axium.plan('Counting Strategy Stage',
    [
      stageWaitForOpenThenIterate(() => axiumKick()),
      createStage((_, dispatch) => {
        dispatch(strategyBegin(countingStrategy()), {
          iterateStage: true
        });
      }),
      createStage((concepts) => {
        const axiumState = concepts[0].state as AxiumState;
        if (axiumState.lastStrategy === countingTopic) {
          const counter = selectState<CounterState>(concepts, counterName);
          expect(counter?.count).toBe(1);
          setTimeout(() => {done();}, 500);
          plan.conclude();
          axium.close();
        }
      })
    ]);
});