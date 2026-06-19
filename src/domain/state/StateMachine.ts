import { Event } from "../events/Event";
import { State } from "./State";
import { TRANSITIONS } from "./TransitionTable";

export function nextState(
  currentState: State,
  event: Event
): State {
  const stateTransitions = TRANSITIONS[currentState];

  const next = stateTransitions[event];

  if (!next) {
    throw new Error(
      `Invalid transition: ${currentState} + ${event}`
    );
  }

  return next;
}