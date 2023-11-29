import { createConcept } from 'stratimux';
import { uXqOfUXQuality } from './qualities/qOfUx.quality';
import { uXPrinciple } from './uX.principle';

export type UXState = {
  message: string
}

export const uXName = 'uX';

export const createUXState = (): UXState => {
  return {
    message: 'Hello World!'
  };
};

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
  );
};