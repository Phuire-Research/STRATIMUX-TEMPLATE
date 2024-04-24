import { ActionStrategy, axiumKick, axiumLog, createActionNode, createStrategy } from 'stratimux';
import { uXqOfUX } from '../qualities/qOfUx.quality';

export const uXSomeStrategyTopic = 'uX Some Error Correcting Strategy';
export const uXSomeStrategy = (): ActionStrategy => {
  const stepSuccess = createActionNode(axiumLog());
  const stepFailure = createActionNode(axiumKick(), {
    successNode: stepSuccess,
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