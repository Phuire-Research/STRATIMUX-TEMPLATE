import { createAxium, createCounterConcept } from 'stratimux';
// import { phuireWorkspaceStrategy } from './concepts/phuire/strategies/workspace.strategy';

(() => {
  const axiumName = '';
  // Sets logging to true and store dialog to true
  //  This will log to the console the dialog of each successive ActionStrategy
  //  And store the entire application context in the axium's dialog.
  createAxium(axiumName, [], true, true);
})();
