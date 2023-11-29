import { createAxium } from 'stratimux';
import { createUXConcept } from './concepts/uX/uX.concept';

(() => {
  const axiumName = 'Your Axium';
  // Sets logging to true and store dialog to true
  //  This will log to the console the dialog of each successive ActionStrategy
  //  And store the entire application context in the axium's dialog.
  createAxium(axiumName, [createUXConcept()], true, true);
})();
