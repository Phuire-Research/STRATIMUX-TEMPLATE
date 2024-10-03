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