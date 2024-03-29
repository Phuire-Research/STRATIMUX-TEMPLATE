import {
  AxiumState,
  CounterState,
  counterName,
  countingStrategy,
  countingTopic,
  createAxium,
  createCounterConcept,
  createStage,
  selectState,
  strategyBegin
} from 'stratimux';

test('Axium Counting Strategy Test', (done) => {
  const axium = createAxium('axiumStrategyTest', [createCounterConcept()], true, true);
  const plan = axium.plan('Counting Strategy Stage',
    [
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